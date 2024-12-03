'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { genAIPromptResponse, genAIExplainResult } from "@/lib/gemini";
import { useChatsContext } from "@/contexts/ChatsContext";

type FeaturesContextType = {
    addChat: (prompt: string, result: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleExplain: () => Promise<void>;
    promptRef: React.RefObject<HTMLInputElement>;
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    response: string;
    setResponse: React.Dispatch<React.SetStateAction<string>>;
    features: { tone: string; len: string };
    setFeatures: React.Dispatch<React.SetStateAction<{ tone: string; len: string }>>;
    explanation: string;
    setExplanation: React.Dispatch<React.SetStateAction<string>>;
    error: string | null;
}

const FeaturesContext = createContext({} as FeaturesContextType);

export const FeaturesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { addChat, isNewChat } = useChatsContext();
    const promptRef = useRef<HTMLInputElement>(null);

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState<string>('');
    const [features, setFeatures] = useState({ tone: 'formal', len: 'concise' });
    const [explanation, setExplanation] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const prompt = promptRef.current?.value || '';
        setPrompt(prompt);
        setError(null);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 

        try {
            const result = await genAIPromptResponse(features.tone, features.len, prompt);
            if (result) {
                setResponse(result);
                addChat(prompt, result);
            }
        } catch (err) {
            setError("Failed to generate response. Please try again."); 
            console.error("Error in handleSubmit:", err); 
        }
    };

    const handleExplain = async () => {
        if (response) {
            window.scrollTo({top: 100, behavior: 'smooth' }); 
            setError(null); 
            try {
                const result = await genAIExplainResult(prompt, response);
                if (result) {
                    setExplanation(result);
                }
            } catch (err) {
                setError("Failed to generate explanation. Please try again."); 
                console.error("Error in handleExplain:", err);
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
            setError(null);
        }
    }, [isNewChat]);

    return (
        <FeaturesContext.Provider value={{
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
            error
        }}>
            {children}
        </FeaturesContext.Provider>
    );
};

export const useFeaturesContext = () => {
    const context = useContext(FeaturesContext);
    if (!context) {
        throw new Error("useFeatures must be used within a FeaturesProvider");
    }
    return context;
}; 