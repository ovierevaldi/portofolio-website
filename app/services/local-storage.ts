import { IsDarkModeProp } from "../Types/generic";

const darkModeKey = 'is-dark-mode';

const localStorageService = () => {

    const setDarkMode = (value: boolean) => {
        const keyVal : IsDarkModeProp = value ? 'dark' : 'light';
        localStorage.setItem(darkModeKey, keyVal);
    };

    const getDarkMode = () : boolean | undefined => {
        const savedMode = localStorage.getItem(darkModeKey);
        if(savedMode){
            const savedValue = savedMode as IsDarkModeProp;

            return savedValue === 'dark' ? true : false;
        }
        else
            return undefined
    }

    return {
        setDarkMode, getDarkMode
    }
};

export default localStorageService;