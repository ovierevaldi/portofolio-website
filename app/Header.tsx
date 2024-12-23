'use client'
import React from 'react'
import DarkMode from './DarkMode'
import ThemeProvider, { useTheme } from './providers/ThemeProvider'

const Header = () => {
  return (
    <ThemeProvider>
      <div className='bg-primary-yellow p-2'>
        <div className='flex justify-end'>
          <DarkMode />
        </div>
    </div>
    </ThemeProvider>
  )
}

export default Header