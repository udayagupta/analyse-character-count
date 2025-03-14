import React from 'react'
import { FaCheck } from "react-icons/fa6";


const CheckBox = ({ state, onClick }) => {
  return (
    <span
      className={
        `flex justify-center items-center check-box-square w-[17px] h-[17px] text-white ${state ? 'bg-[#d3a0fa]' : ' border border-[#12131a] dark:border-[white]'}`
      }
      onClick={onClick}
    >
      {
        state && (
          <FaCheck className='inline' />
        )
      }
    </span>
  )
}

export default CheckBox