'use client'

import React, { useRef, useState } from 'react'
import SkillGrid, { SkillGridProp } from './SkillGrid'
import { backendSkills, devOpsSkills, frontEndSkill, uTestingSkils } from '../configs/SkillData';
import { BiSolidUpArrow } from "react-icons/bi";

const SkillList = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const [isUIHidden, setIsUIHidden] = useState(false);

  const toggleSkillUI = () => {
    setIsUIHidden((prev) => !prev);
  }

  const frontEndSkills : SkillGridProp = {name: 'Front End', skillData: frontEndSkill};
  const backEndSkills : SkillGridProp = {name: 'Back End', skillData: backendSkills};
  const uTestingSkills: SkillGridProp = {name: 'Unit Testings', skillData: uTestingSkils};
  const devOpsSkiils: SkillGridProp = {name: 'DevOps', skillData: devOpsSkills};

  const showSkills: SkillGridProp[] = [frontEndSkills, backEndSkills, uTestingSkills, devOpsSkiils];
    
  return (
    <div className='space-y-4 xl:space-y-8'>
        <div className='flex'>
            <div
              onClick={toggleSkillUI} 
              className='flex items-center gap-x-2 xl:gap-x-4 cursor-pointer'>
              <span className='text-primary-blue text-xl xl:text-3xl font-medium' >My Tech Skills</span>
              <BiSolidUpArrow 
                color='#19ade3' 
                className={`xl:w-8 xl:h-8 ${isUIHidden ? '' : 'rotate-180'}`}/>
            </div>
        </div>
        
        <div className={`overflow-hidden ${isUIHidden ? 'h-0' : 'h-auto'}`}>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-8'>
                {
                  showSkills.map((skill, index) => 
                  <div
                    ref={skillRef}
                    key={index}
                    className='w-full'>
                    <SkillGrid 
                      key={skill.name} 
                      data={skill}
                      >
                    </SkillGrid>
                  </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default SkillList