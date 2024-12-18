import Image from 'next/image'
import Info from './Info'

import { SkillDataProp } from '../configs/SkillData';
import { BiSolidUpArrow } from 'react-icons/bi';
import { useState } from 'react';

export type SkillGridProp = {
    name: string,
    skillData: SkillDataProp[];
}

const SkillGrid = ({data}: {data: SkillGridProp}) => {
    const [isUIHidden, setIsUIHidden] = useState(false);
    
    const toggleSkillUI = () => {
        setIsUIHidden((prev) => !prev);
        
    };

    return (
        <div className={`${isUIHidden ? 'mb-0' : 'mb-8'}`}>
            <div className='flex mb-2 lg:mb-4'>
                <button 
                    onClick={toggleSkillUI}
                    className='flex items-center gap-x-2 text-primary-tomato'>
                    <p className='text-lg xl:text-2xl font-medium'>{data.name}</p>
                    <BiSolidUpArrow
                        className={`xl:w-8 xl:h-8 ${isUIHidden ? '' : 'rotate-180'}`}/>
                </button>
            </div>
            <div className={`${isUIHidden ? 'h-0' : 'h-auto'}`}>
                <div className='grid grid-cols-2 justify-items-center border p-2 xl:p-4 rounded-t text-lg xl:text-xl text-primary-gray font-medium'>
                    <p>Tech</p>
                    <p>Name</p>
                </div>
                {
                    data.skillData.map((skill) => 
                        <div key={skill.name} className='grid grid-cols-2 justify-items-center border p-2'>
                            <Image 
                                src={skill.image}    
                                alt={`${skill.name} Icon`} 
                                className='w-12 xl:w-20 xl:h-20 '>
                            </Image>
                            
                            <div 
                                className='flex items-center gap-x-2'>
                                <p 
                                    className='text-center font-semibold text-primary-gray'>
                                    {skill.name}
                                </p>
                                {skill.content ?  
                                <Info
                                    context={skill.content}/> : ''}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SkillGrid