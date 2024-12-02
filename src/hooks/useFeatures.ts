import { genAIPromptResponse, genAIExplainResult } from "@/lib/gemini";
import { useChatsContext } from "@/contexts/chatsContext";
import { useEffect, useRef, useState } from "react";

const useFeatures = () => {
    const { addChat, isNewChat } = useChatsContext();
    const promptRef = useRef<HTMLInputElement>(null);

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState<string>('');
    const [features, setFeatures] = useState({ tone: 'Formal', len: 'Concise' });
    const [explanation, setExplanation] = useState<string>('');
    const [error, setError] = useState<string | null>(null); // Initialize error state

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const prompt = promptRef.current?.value || '';
        setPrompt(prompt);
        setError(null); // Reset error state before making the API call

        try {
            const result = await genAIPromptResponse(features.tone, features.len, prompt);
            if (result) {
                setResponse(result);
                addChat(prompt, result);
            }
        } catch (err) {
            setError("Failed to generate response. Please try again."); // Set error message
            console.error("Error in handleSubmit:", err); // Log the error for debugging
        }
    };

    const handleExplain = async () => {
        if (response) {
            setError(null); // Reset error state before making the API call
            try {
                const result = await genAIExplainResult(prompt, response);
                if (result) {
                    setExplanation(result);
                }
            } catch (err) {
                setError("Failed to generate explanation. Please try again."); // Set error message
                console.error("Error in handleExplain:", err); // Log the error for debugging
            }
        }
    };

    useEffect(() => {
        if (isNewChat) {
            if (promptRef.current) {
                promptRef.current.value = '';
            }
            setPrompt('');
            setResponse('');
            setExplanation('');
            setError(null); // Reset error state on new chat
        }
    }, [isNewChat]);

    return {
        addChat,
        handleSubmit,
        handleExplain,
        promptRef,
        prompt,
        setPrompt,
        response,
        setResponse,
        features,
        setFeatures,
        explanation,
        setExplanation,
        error, // Include error in the return value
    };
};

export default useFeatures; 