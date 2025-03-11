import React from 'react'

const TextStats = React.createContext({
    charactersCount: 0,
    setCharactersCount: () => {},
    wordsCount: 0,
    setWordsCount: () => {},
    sentencesCount: 0,
    setSentencesCount: () => {},
    excludeSpaces: false,
    setExcludeSpaces: () => {},
})