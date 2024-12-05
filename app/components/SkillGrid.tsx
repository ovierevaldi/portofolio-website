import Image from 'next/image'
import Info from './Info'

import { SkillDataProp } from '../configs/SkillData';

export type SkillGridProp = {
    name: string,
    skillData: SkillDataProp[] 
}

const SkillGrid = ({data}: {data: SkillGridProp}) => {
  return (
    <div className='w-full'>
        <p className='text-2xl text-primary-blue font-medium mb-2'>{data.name}</p>
        <div className=''>
            <div className='grid grid-cols-2 justify-items-center border p-4 rounded-t'>
                <p className='text-xl text-primary-gray font-medium'>Tech</p>
                <p className='text-xl text-primary-gray font-medium'>Name</p>
            </div>
            {
                data.skillData.map((skill) => 
                    <div key={skill.name} className='grid grid-cols-2 justify-items-center border p-2'>
                        <Image src={skill.image} alt='React Icon' width={75} height={75}></Image>
                        
                        <div className='flex items-center gap-x-4'>
                            <p className='text-center font-semibold text-primary-gray'>{skill.name}</p>
                            {skill.content ?  <Info context={skill.content} /> : ''}
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default SkillGrid