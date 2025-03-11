import React, { useState } from 'react'
import Theme from './Theme'

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <Theme.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </Theme.Provider>
  )
}

export default ThemeProvider