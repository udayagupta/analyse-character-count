import React from 'react'
import CharacterContextProvider from './context/CharacterContext/CharacterContextProvider'
import CharacterBox from './components/CharactersBox/CharacterBox'
import Header from './components/Header/Header'
import ThemeProvider from './context/Theme/ThemeProvider'
import { TextStatsProvider } from './context/TextStats/TextStatsProvider'
import InfoCardList from './components/InfoCardList/InfoCardList'
import LetterDensity from './components/LetterDensity/LetterDensity'

function App() {

  return (
    <ThemeProvider>
      <div className='w-screen h-screen flex justify-center'>
        <div className='w-[75%] full-width p-2 flex flex-col'>
          <Header />
          <div className='mt-5 '>
            <h2 className='text-center sm:text-3xl! md:text-3xl! lg:text-5xl! font-bold'>Analyze your text in <br /> real-time.</h2>
          </div>
          <CharacterContextProvider>
            <TextStatsProvider>
              <CharacterBox />
              <InfoCardList />
            </TextStatsProvider>
            <LetterDensity />
          </CharacterContextProvider>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
