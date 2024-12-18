'use client'

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'

export type CompanyInfoProp = {
  name: string;
  year: {
      joined: Date,
      ended: Date
  };
  logo: {
      src: StaticImageData,
      scale?: number;
  };
  description: string
};

const CompaniesProfile = ({data} : {data: CompanyInfoProp}) => {
  const [isShowDesc, setIsShowDesc] = useState(false);

  return (
    <div 
      className='relative'   
      onMouseEnter={() => setIsShowDesc(true)}
      onMouseLeave={() => setIsShowDesc(false)}>
      <div 
        className='flex flex-col hover:scale-110 duration-200 cursor-pointer' 
      >
        <div 
          className='mx-auto mb-4 max-w-32 lg:max-w-44'>
          <Image 
              src={data.logo.src} 
              alt={`${data.name} Icon`}>
          </Image>
        </div>

        <div className=''>
          <p 
            className='font-medium text-center'>
            {data.name}
          </p>
        </div>
      </div>
      {
        isShowDesc && 
          <div className='absolute bg-primary-blue p-4 rounded-lg top-3/4 right-1/2 translate-x-1/2 z-20 text-white'>
              <div>
                <p className='font-medium text-center mb-4'>
                Since: <br></br>
                {data.year.joined.getFullYear()} - {data.year.ended.getFullYear()}
                </p></div>
                <p>
                  {data.description}
                </p>
          </div>
      }
    </div>
  )
}

export default CompaniesProfile