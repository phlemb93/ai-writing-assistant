'use client'

import { createContext, useReducer, ReactNode, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


type Chat = {
    id: string; 
    message: string;
    response: string;
}

type State = {
    chats: Chat[];
}

type ChatsContext = {
    chats: Chat[];
    addChat: (message: string, response: string) => void;
    deleteChat: (id: string) => void;
    isNewChat: boolean;
    handleIsNewChat: () => void;
    handleDownloadHistory: () => void;
}

type Action =
    | { type: 'ADD_CHAT'; payload: Chat }
    | { type: 'DELETE_CHAT'; payload: string };

const initialState: State = {
    chats: JSON.parse(localStorage.getItem('chats')!) || []
};

const chatsReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_CHAT':
            const newChats = [...state.chats, action.payload];
            localStorage.setItem('chats', JSON.stringify(newChats));
            return { ...state, chats: newChats };
        case 'DELETE_CHAT':
            const filteredChats = state.chats.filter(chat => chat.id !== action.payload);
            localStorage.setItem('chats', JSON.stringify(filteredChats));
            return { ...state, chats: filteredChats };
        default:
            return state;
    }
};

export const ChatsContext = createContext({} as ChatsContext);

export const ChatsProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(chatsReducer, initialState);
    const [isNewChat, setIsNewChat] = useState(false);

    const handleIsNewChat = () => {
        setIsNewChat(true);
    }

    const addChat = (message: string, response: string) => {
        const newChat: Chat = { id: uuidv4(), message, response }; 
        dispatch({ type: 'ADD_CHAT', payload: newChat });
    };

    const deleteChat = (id: string) => {
        dispatch({ type: 'DELETE_CHAT', payload: id });
    };

    const handleDownloadHistory = () => {
        const historyText = state.chats.map(chat => `User: ${chat.message}\nAI: ${chat.response}\n`).join('\n');
        const blob = new Blob([historyText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chat_history.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); 
    };

    return (
        <ChatsContext.Provider value={{ chats: state.chats, addChat, deleteChat, isNewChat, handleIsNewChat, handleDownloadHistory }}>
            {children}
        </ChatsContext.Provider>
    );
};

export const useChatsContext = () => {
    const context = useContext(ChatsContext);
    if (!context) {
        throw new Error('useChatsContext must be used within a ChatsProvider');
    }
    return context;
}