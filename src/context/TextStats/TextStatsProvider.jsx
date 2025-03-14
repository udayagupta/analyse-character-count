import React, { useEffect, useState } from 'react'
import TextStats from './TextStats'
import useCharacter from '../CharacterContext/useCharacter'


export const TextStatsProvider = ({ children }) => {
    const { text, setText } = useCharacter()
    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [charactersCount, setCharactersCount] = useState(0)
    const [wordsCount, setWordsCount] = useState(0)
    const [sentencesCount, setSentencesCount] = useState(0)

    useEffect(() => {
        if (excludeSpaces) {
            setCharactersCount(text.replace(/ /g, '').length)
        } else {
            setCharactersCount(text.length)
        }
        setWordsCount(text.trim() ? text.trim().split(/\s+/).length : 0);
        setSentencesCount(text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0);


    }, [text, excludeSpaces])

    return (
        <TextStats.Provider value={{
            excludeSpaces,
            setExcludeSpaces,
            charactersCount,
            wordsCount,
            sentencesCount,
        }}>
            {children}
        </TextStats.Provider>
    )
}
