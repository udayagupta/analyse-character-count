import React, { useState, useContext } from 'react'
import CharacterContext from './CharacterContext'

const CharacterContextProvider = ({ children }) => {
  const [text, setText] = useState("")
  const [charactersLimit, setCharactersLimit] = useState(100)
  

  return (
    <CharacterContext.Provider value={{ text, setText, charactersLimit, setCharactersLimit }}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider