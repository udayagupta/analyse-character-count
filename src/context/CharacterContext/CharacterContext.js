import React from 'react';

const CharacterContext = React.createContext({
    text: "",
    setText: () => {},
    charactersLimit: 100,
    setCharactersLimit: () => {},
   
})

export default CharacterContext;