import React from 'react';
import { FeaturesProvider } from './FeaturesContext';
import { ChatsProvider } from './ChatsContext'; 

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ChatsProvider>
            <FeaturesProvider>
                {children}
            </FeaturesProvider>
        </ChatsProvider>
    );
};

export default AppProvider; 