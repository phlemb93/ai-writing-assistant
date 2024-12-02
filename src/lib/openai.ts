'use server'

import axios from 'axios';

export const fetchRequest = async () => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo', 
                messages: [{ role: 'user', content: 'Say this is a test' }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}` 
                }
            }
        );
        return response.data; 
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching data:', error.response ? error.response.data : error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error; 
    }
};



