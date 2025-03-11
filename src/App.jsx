import React from 'react'
import CharacterContextProvider from './context/CharacterContext/CharacterContextProvider'
import CharacterBox from './components/CharactersBox/CharacterBox'
import Header from './components/Header/Header'
import ThemeProvider from './context/Theme/ThemeProvider'
import { InfoCard } from './components/InfoCard/InfoCard'

function App() {

  return (
    <ThemeProvider>
      <div className='w-screen h-screen flex justify-center'>
        <div className='w-[75%] p-2 flex flex-col items-center'>
          <Header />
          <div className='mt-5 '>
            <h2 className='text-center sm:text-3xl! md:text-3xl! lg:text-5xl! font-bold'>Analyze your text in <br /> real-time.</h2>
          </div>
          <CharacterContextProvider>
            <CharacterBox />
          </CharacterContextProvider>
          <ul className='info-card-list flex w-full gap-4 mt-5'>
            <li className='flex-1 '>
              <InfoCard count={0} text={'total characters'} className={'bg-[#d3a0fa]'} />
            </li>
            <li className='flex-1 '>
              <InfoCard count={0} text={'word count'} className={'bg-[#ff9f00]'} />
            </li>
            <li className='flex-1 '>
              <InfoCard count={0} text={'word count'} className={'bg-[#fe8159]'} />
            </li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
