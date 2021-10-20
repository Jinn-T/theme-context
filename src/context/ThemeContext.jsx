import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    //pass this within our ThemeContext.Provider below
    const data = { darkTheme, setDarkTheme };

    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    ); // here we are passing the value and data to the app.js
};

export default ThemeProvider; // now have to import this in our app.js
