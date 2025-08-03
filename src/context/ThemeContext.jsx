import React, { createContext, useState, useEffect } from 'react';

export const themes = {
  theme1: 'theme1',
  theme2: 'theme2',
  theme3: 'theme3',
};

// Create context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.theme1);

  
  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme');
    if (storedTheme && themes[storedTheme]) {
      setTheme(storedTheme);
    }
  }, []);

  
  useEffect(() => {
    document.documentElement.className = ''; 
    document.documentElement.classList.add(theme); 
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
