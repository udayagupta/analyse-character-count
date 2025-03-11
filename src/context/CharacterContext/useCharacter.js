import React, {useContext} from 'react';
import CharacterContext from './CharacterContext';

const useCharacter = () => {
    const context = useContext(CharacterContext)

    return context;
}

export default useCharacter;