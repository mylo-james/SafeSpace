import { useState } from 'react';
import ThemeContext from './Context';
import { def } from './themes';

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(def);

    const value = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
