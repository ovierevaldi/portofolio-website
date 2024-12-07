'use client'

import React, { ReactNode, useState } from 'react'
import { IoIosInformationCircle } from 'react-icons/io'

const Info = ({context}: {context: ReactNode}) => {
    const [showPopUp, setShowPopUp] = useState(false)

    const hoverInfo = (state: boolean) => {
        setShowPopUp(state)
    };

  return (
    <div className='relative'>
        <IoIosInformationCircle  
            onMouseEnter={() => hoverInfo(true)} 
            onMouseLeave={() => hoverInfo(false)}
            size={20} 
            color='#2F4858'
            />
        <div className={`${showPopUp ? 'absolute min-w-[300px] bg-primary-gray/80 p-4 rounded-lg text-sm text-white' : 'hidden'}`}>
            {context}
        </div>
    </div>
  )
}

export default Info