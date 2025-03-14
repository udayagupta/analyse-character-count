import React, { useEffect, useState } from 'react'
import useCharacter from '../../context/CharacterContext/useCharacter'
import { ReadingTime } from '../ReadingTime/ReadingTime'
import CheckBox from './CheckBox'
import useTextStats from '../../context/TextStats/useTextStats'
import { densityOfEachLetter } from '../../utils'


const CharacterBox = () => {

  const { text, setText } = useCharacter()
  const { charactersLimit, setCharactersLimit } = useCharacter()
  const [charactersLimitVisible, setCharactersLimitVisible] = useState(false)
  const { wordsCount ,excludeSpaces, setExcludeSpaces } = useTextStats()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleCharactersLimit = () => {
    setCharactersLimitVisible((prevData) => !prevData)
  }

  const handleExcludeSpaces = () => {
    setExcludeSpaces(prevData => !prevData)
  }

  useEffect(() => {
    const ans = densityOfEachLetter(text)
    console.log('density', ans);
  }, [text])

  return (
    <div className='w-full'>
      {
        charactersLimitVisible ? (
          <textarea
            placeholder='Start typing here.. or paste your text'
            value={text}
            onChange={handleChange}
            className='text-xl w-full h-[200px] bg-[#e4e4ef]  border-2 mt-8 mb-3 placeholder:text-[#12131a] dark:placeholder:text-[#e4e4ef] rounded-lg dark:bg-[#21222c]'
            maxLength={charactersLimit}
          >
          </textarea>
        ) : (
          <textarea
            placeholder='Start typing here.. or paste your text'
            value={text}
            onChange={handleChange}
            className='text-xl w-full h-[200px] bg-[#e4e4ef] border-2 mt-8 mb-3 placeholder:text-[#12131a] dark:placeholder:text-[#e4e4ef] rounded-lg dark:bg-[#21222c]'
          >
          </textarea>
        )
      }
      <div className='flex justify-between check-buttons-div'>
        <div className='check-btns flex gap-5 text-md justify-center items-center'>
          <div onClick={handleExcludeSpaces} className=' flex gap-2 justify-center cursor-pointer items-center'>
            <CheckBox state={excludeSpaces} />
            Exclude Spaces
          </div>

          <div className=' flex gap-2 text-md justify-center cursor-pointer items-center'>
            <span className='flex gap-3 justify-center items-center' onClick={handleCharactersLimit}>
              <CheckBox state={charactersLimitVisible} />
              Set Characters Limit
            </span>
            {
              charactersLimitVisible &&
              <input
                type="number"
                onChange={(e) => setCharactersLimit(e.target.value)}
                value={charactersLimit}
                name="char-limit"
                id="char-limit"
                className='dark:border-white border border-[#12131a]'
              />
            }
          </div>
        </div>
        <div>
          <ReadingTime wordsCount={wordsCount}/>
        </div>
      </div>
    </div>
  )
}

export default CharacterBox