import React, { useEffect } from 'react'
import { InfoCard } from '../InfoCard/InfoCard'
import useTextStats from '../../context/TextStats/useTextStats'


const InfoCardList = () => {
  const { charactersCount, wordsCount, sentencesCount, excludeSpaces } = useTextStats()

  useEffect(() => {
    console.log(wordsCount)
    console.log(sentencesCount)

  }, [wordsCount, sentencesCount])

  return (
    <ul className='info-card-list flex w-full gap-4 mt-5'>
      <li className='flex-1'>
        <InfoCard
          count={charactersCount}
          text={excludeSpaces ? 'total characters (no spaces)' : 'total characters'}
          className={'bg-[#d3a0fa]'}
        />
      </li>
      <li className='flex-1'>
        <InfoCard
          count={wordsCount}
          text={'word count'}
          className={'bg-[#ff9f00]'}
        />
      </li>
      <li className='flex-1'>
        <InfoCard
          count={sentencesCount}
          text={'sentences count'}
          className={'bg-[#fe8159]'}
        />
      </li>
    </ul>
  )
}

export default InfoCardList