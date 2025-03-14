import React, {useContext} from 'react';
import TextStats from './TextStats';


const useTextStats = () => {
    const context = useContext(TextStats)

    return context;
}

export default useTextStats;