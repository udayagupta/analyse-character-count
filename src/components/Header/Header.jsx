import React from 'react'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='flex justify-between items-center'>
        <div>
          <h1 className='font-semibold lg:text-3xl! md:text-2xl! sm:text-xl!'>Character Count</h1>
        </div>
        <div>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  )
}

export default Header