import React, { useEffect } from 'react'
import { useTheme } from '../../context/Theme/useTheme'
import { GoSun } from "react-icons/go";
import { BsMoon } from "react-icons/bs";

const ToggleTheme = () => {

  const { isDarkMode, setIsDarkMode } = useTheme()


  useEffect(() => {
    let html = document.querySelector('html')

    if (isDarkMode) {
      html.classList.add('dark')
      
    } else {
      html.classList.remove('dark')
    }

  }, [isDarkMode])

  const handleChange = () => {
    setIsDarkMode((prevData) => !prevData)
  }

  return (
    <label
      htmlFor="toggle"
      className='flex justify-center items-center relative p-5 cursor-pointer rounded-lg bg-[#e4e4ef] dark:bg-[#21222c]'
      title={isDarkMode ? 'Change to light mode' : 'Change to dark mode'}
    >
      <input
        className='absolute invisible -z-10'
        type="checkbox"
        onChange={handleChange}
        checked={isDarkMode}
        name="toggle"
        id="toggle"
      />  
      <span className='absolute'>
        {isDarkMode ? <GoSun className='inline text-xl font-bold ' /> : <BsMoon className='font-bold inline text-xl' />}
      </span>
    </label>
  )
}

export default ToggleTheme