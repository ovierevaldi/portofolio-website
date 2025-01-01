'use client'
import React from 'react'
import DarkModeButton from './components/DarkModeButton'
import ThemeProvider from './providers/ThemeProvider'

const Header = () => {
  return (
    <ThemeProvider>
      <div className='bg-primary-yellow p-2'>
        <div className='flex justify-end'>
          <DarkModeButton />
        </div>
    </div>
    </ThemeProvider>
  )
}

export default Header