import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-primary-yellow p-3 flex-wrap text-sm'>
      <p>&#9400; 2024</p>
      <div className='flex items-center gap-x-2'>
        <p>Made with</p>
        <FaHeart />
      </div>
      <div>
        <p>Contact Me: 
        </p>
        <p>
        revaldiovie3@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Footer