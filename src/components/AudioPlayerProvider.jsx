import React from 'react'

const AudioPlayer = new Audio();

const AudioContext = React.createContext(AudioPlayer);

// export const useAudio = React.useContext(AudioContext);

export const AudioProvider = ({children,}) => (
    <AudioContext.Provider value={AudioPlayer}>{children}</AudioContext.Provider>)