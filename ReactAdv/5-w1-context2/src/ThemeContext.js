import {createContext,useState,useContext} from "react";

const TheamContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {

    /*Remember that the first argument in this case "theme"
    is a value and the secondone is a function in this case
    "setTheme"*/
    const [theme,setTheme] = useState("light");
    
    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

     return <TheamContext.Provider value = {{theme, toggleTheme}}>
        {children}
     </TheamContext.Provider>   
    };

export const useTheme = () => useContext(TheamContext);
