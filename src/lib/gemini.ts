'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined");
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export const genAIPromptResponse = async (tone:string, len:string, userInput:string) => {
    
    try {
        const prompt = `Rewrite the following sentence in a ${tone} tone, making it ${len}:
        ${userInput}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
        
    } catch (error) {
        console.log(error)
    }
   
}
export const genAIExplainResult = async (question:string, answer:string) => {
    try {
        const prompt = `Briefly explain how this ${answer} version is better than this; ${question}.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
        
    } catch (error) {
        console.log(error)
    }
   
}