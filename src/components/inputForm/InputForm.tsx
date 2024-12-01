'use client'

import { genAIExplainResult, genAIPromptResponse } from '@/lib/gemini';
import styles from './InputForm.module.css'
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useRef, useState } from 'react';
import { useChatsContext } from '@/contexts/chatsContext';


const InputForm = () => {
    const promptRef = useRef<HTMLInputElement>(null);
    const {addChat, isNewChat} = useChatsContext();

    const [prompt, setPrompt] = useState('');
    const [features, setFeatures] = useState({
      tone: 'formal',
      len: 'concise'
    });
    const [response, setResponse] = useState<string>('');
    const [explanation, setExplanation] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const prompt = promptRef.current?.value || '';
        setPrompt(prompt);

        const result = await genAIPromptResponse(features.tone, features.len, prompt);
        if(result){
            setResponse(result);  
            addChat(prompt, result);
        }
    }

    const handleExplain = async () => {
        if(response){
            const result = await genAIExplainResult(prompt, response);
            if(result){
                setExplanation(result);
            }
        }
    }

    useEffect(() => {
        if(isNewChat){
            if(promptRef.current) {
                promptRef.current.value = '';
            }
            setPrompt('');
            setResponse('');
            setExplanation('');
        }
    },[isNewChat])


  return (
    <div className={styles.mainContainer}>
        <div className={styles.features}>
            <label htmlFor="tone">
                <select name="tone" id="tone" onChange={(e) => setFeatures({ ...features, tone: e.target.value })}>
                    <option value="">Select a tone</option>
                    <option value="formal">Formal</option>
                    <option value="casual">Casual</option>
                    <option value="persuasive">Persuasive</option>
                </select>
            </label>
            <label htmlFor="len">
                <select name="len" id="len" onChange={(e) => setFeatures({ ...features, len: e.target.value })}>
                    <option value="">Select a length</option>
                    <option value="shorter">Shorter</option>
                    <option value="longer">Longer</option>
                    <option value="concise">Concise</option>
                </select>
            </label>
            {response && <button onClick={handleExplain}>Explain</button>}
        </div>
        <div className={styles.contentContainer}>
            { prompt && 
            <div className={styles.userText}>
                <p>{prompt}</p>
            </div>
            }

           { response && 
           <div className={styles.botText}>
                <p>{response}</p>
            </div> 
            }
        </div>

        { explanation &&
        <div className={styles.button} >
            <h3>Explanation</h3>
            <p>{explanation}</p>
        </div>
        }
        <form onSubmit={handleSubmit} className={styles.textForm}>
            <label htmlFor="newChat" className={styles.textLabel}>
                <input type="text" ref={promptRef} className={styles.textInput} name="newChat" id="newChat"  placeholder='Talk to AI Writer'/>
                <button type='submit' >
                    <AiOutlineSend className={styles.icon} />
                </button>
            </label>
        </form>
    </div>
  )
}

export default InputForm