'use client';

import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useTheme } from "../providers/ThemeProvider";
import localStorageService from "../services/local-storage";

const DarkModeButton = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [darkMode, setDarkMode] = useState(isDarkMode);

    useEffect(() => {
        const savedValue = localStorageService().getDarkMode();
        if(savedValue)
            setDarkMode(savedValue);
    }, [])

    const changeMode = () => {
        setDarkMode(toggleDarkMode());
    }

    return (
        <button onClick={changeMode}>
            <div className="flex items-center gap-x-2">
                <p>{darkMode ? 'Too Dark?' : 'Too Bright?'}</p>

                {
                    darkMode ?<CiDark size={30} /> : <CiLight size={30}/>
                }
            </div> 
        </button>
    )
}

export default DarkModeButton