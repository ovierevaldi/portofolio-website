'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
};

type ThemeContextProp = {
  isDarkMode: boolean,
  toggleDarkMode: () => boolean;
}

const ThemeContext = createContext<ThemeContextProp>({isDarkMode: false, toggleDarkMode: () => {return false}});

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    return !isDarkMode;
  };

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

export const useTheme = (): ThemeContextProp => useContext(ThemeContext);