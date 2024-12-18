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
            size={18}
            className='xl:w-5 xl:h-5 text-primary-mint'
            />
        <div className={`${showPopUp ? 'absolute min-w-[300px] bg-primary-blue p-4 rounded-lg text-sm text-white z-10' : 'hidden'}`}>
            {context}
        </div>
    </div>
  )
}

export default Info