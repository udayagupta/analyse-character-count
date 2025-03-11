import React from 'react'

export const InfoCard = ({count, text, className}) => {
  return (
    <div className={`${className} info-card p-4 py-8 rounded-lg capitalize`}>
      <p className='text-6xl font-bold'>{count === 0 ? '00' : count}</p>
      <p className='text-2xl font-light'>{text}</p>
    </div>
  )
}
