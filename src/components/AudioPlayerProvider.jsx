import React from 'react'



const ThemeContext = React.createContext('light');

// export const useAudio = React.useContext(ThemeContext);

export const ThemeProvider = ({children,}) => (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>)