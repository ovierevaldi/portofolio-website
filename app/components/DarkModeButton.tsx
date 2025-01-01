'use client';

import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useTheme } from "../providers/ThemeProvider";

const DarkModeButton = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [darkMode, setDarkMode] = useState(isDarkMode);

    const changeMode = () => {
        setDarkMode(toggleDarkMode());
    }

    return (
        <button onClick={changeMode}>
            {
                darkMode ? 
                <CiDark size={30} /> : 
                <CiLight size={30}/>
            }
        </button>
    )
}

export default DarkModeButton