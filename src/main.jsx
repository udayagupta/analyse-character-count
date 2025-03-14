import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TextStatsProvider } from './context/TextStats/TextStatsProvider.jsx'
import ThemeProvider from './context/Theme/ThemeProvider.jsx'
import CharacterContextProvider from './context/CharacterContext/CharacterContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
