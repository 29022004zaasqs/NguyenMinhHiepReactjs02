import React, { createContext, useContext, useState } from 'react';
import NmhUseContext1 from './NmhUseContext1';

export const ThemeContext = createContext(); // Tạo ngữ cảnh để chia sẻ

export default function NmhUseContext() {
    // State
    const [theme, setTheme] = useState('red');

    const handleChange = () => {
        setTheme(theme === 'red' ? 'blue' : 'red');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2>Demo useContext</h2>
                <NmhUseContext1 />
                <button onClick={handleChange}>Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    );
}
