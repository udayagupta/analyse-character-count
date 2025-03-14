import React, { useEffect, useState } from 'react'
import useCharacter from '../../context/CharacterContext/useCharacter'
import { densityOfEachLetter, getTotalLetter } from '../../utils'

const LetterDensity = () => {
  const { text } = useCharacter()
  const [density, setDensity] = useState({})
  const [totalLetters, setTotalLetters] = useState(0)

  useEffect(() => {
    setDensity(densityOfEachLetter(text))
    setTotalLetters(getTotalLetter(text))

    console.log('total letters', totalLetters)
  }, [text])

  return (
    <section className='flex flex-col mt-6'>
      <div>
        <h3 className='font-semibold text-2xl!'>Letter Density</h3>
      </div>
      <div className=''>
        {
          text.length ? (
            <table className='w-full border-collapse overflow-auto'>
              <tbody className='flex flex-col'>
                {
                  Object.keys(density).map((key, index) => (
                    <tr className='p-2 flex justify-center gap-3 items-center' key={index}>
                      <td className='w-[5%] text-center density-letter'>{key}</td>
                      <td className='h-[12px] w-[80%] dark:bg-[#21222c] bg-[#e4e4ef] density-bar rounded-[100vw]'>
                        <div style={{width: `${(density[key]/totalLetters)*100}%`}} className={`bg-[#d3a0fa] transition-[width] rounded-[100vw] h-full`}></div>
                      </td>
                      <td className='w-[10%] density-frequency'>{density[key]} ({((density[key]/totalLetters)*100).toFixed(2)}%)</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : (
            <p className='mt-5 text-md'>No characters found. Start typing to see letter density.</p>
          )
        }
      </div>
    </section>
  )
}

export default LetterDensity