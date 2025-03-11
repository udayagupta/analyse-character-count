import React from 'react'
import { FaCheck } from "react-icons/fa6";


const CheckBox = ({ state }) => {
  return (
    <span
      className={
        `flex justify-center items-center check-box-square w-[20px] h-[20px] text-white ${state ? 'bg-[#d3a0fa]' : ' border border-[#12131a] dark:border-[white]'}`
      }
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