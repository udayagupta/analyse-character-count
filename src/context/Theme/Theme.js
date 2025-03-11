import React from 'react';

const Theme = React.createContext({
    isDarkMode: true,
    setIsDarkMode: () => {},
})

export default Theme;
