import React, { useEffect, useState } from 'react'
import useCharacter from '../../context/CharacterContext/useCharacter'
import { ReadingTime } from '../ReadingTime/ReadingTime'
import CheckBox from './CheckBox'


const CharacterBox = () => {

  const { text, setText } = useCharacter()
  const { charactersLimit, setCharactersLimit } = useCharacter()
  const [charactersLimitVisible, setCharactersLimitVisible] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    console.log(charactersLimit)
    console.log(charactersLimitVisible)
  }, [charactersLimit])

  const handleCharactersLimit = () => {
    setCharactersLimitVisible((prevData) => !prevData)
  }

  return (
    <div className='w-full'>
      <textarea
        placeholder='Start typing here.. or paste your text'
        value={text}
        onChange={handleChange}
        className='lg:text-2xl md:text-xl w-full h-[200px] bg-[#e4e4ef] border-2 mt-8 mb-3 dark:border-[#2b2d3a]  rounded-lg dark:bg-[#21222c] transition-[background-color] ease-in duration-[1s] '
        maxLength={charactersLimit}
      >
      </textarea>
      <div className='flex justify-between'>
        <div className='check-btns flex gap-5 justify-center items-center'>
          <div className=' flex gap-2 justify-center cursor-pointer items-center'>
            <CheckBox state={false} />
            Exclude Spaces
          </div>

          <div onClick={handleCharactersLimit} className=' flex gap-2 justify-center cursor-pointer items-center'>
            <CheckBox state={charactersLimitVisible} />
            Set Characters Limit
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
          <ReadingTime />
        </div>
      </div>
    </div>
  )
}

export default CharacterBox