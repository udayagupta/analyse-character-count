import React, { useEffect, useState } from 'react'
import { timeByWords } from '../../utils'

export const ReadingTime = ({wordsCount}) => {

  const [time, setTime] = useState(timeByWords(wordsCount))

  useEffect(() => {
    setTime(timeByWords(wordsCount))
  }, [wordsCount])


  return (
    <p>Approx. reading time: {wordsCount === 0 ? 'None' : time}</p>
  )
}
