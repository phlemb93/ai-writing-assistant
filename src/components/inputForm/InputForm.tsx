'use client'

import styles from './InputForm.module.css'
import { AiOutlineSend } from "react-icons/ai";
import { useEffect } from 'react';
import { useFeaturesContext } from '@/contexts/FeaturesContext';


const InputForm = () => {

const { prompt, promptRef, response, explanation, handleSubmit, error } = useFeaturesContext();

useEffect(() => {

    if(response){
        if(promptRef.current){
            promptRef.current.value = '';
            promptRef.current.focus();
        }
    }
},[promptRef, response])

  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
        {error && <div className="error-message">{error}</div>}
            { prompt && 
                <div className={`${styles.text} ${styles.userText}`}>
                    <p>{prompt}</p>
                </div>
            }

            { response && 
                <div className={`${styles.text} ${styles.botText}`}>
                    <p>{response}</p>
                </div> 
            }

            { explanation &&
                <div className={styles.explainContainer} >
                    <h3 className={styles.explainTitle}>Explanation</h3>
                    <p className={styles.explainText}>{explanation}</p>
                </div>
            }
        </div>

       
        <form onSubmit={handleSubmit} className={styles.textForm}>
            <label htmlFor="newChat" className={styles.textLabel}>
                <input type="text" ref={promptRef} className={styles.textInput} name="newChat" id="newChat"  placeholder='Talk to AI Writer'/>
                <button className={styles.btn} type='submit'>Rewrite</button>
            </label>
        </form>
    </div>
  )
}

export default InputForm