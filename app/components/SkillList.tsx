'use client'

import React, { useState } from 'react'
import SkillGrid, { SkillGridProp } from './SkillGrid'
import { backendSkills, devOpsSkills, frontEndSkill, uTestingSkils } from '../configs/SkillData';
import { BiSolidDownArrow } from "react-icons/bi";

const SkillList = () => {
  
  const frontEndSkills : SkillGridProp = {name: 'Front End', skillData: frontEndSkill};
  const backEndSkills : SkillGridProp = {name: 'Back End', skillData: backendSkills};
  const uTestingSkills: SkillGridProp = {name: 'Unit Testings', skillData: uTestingSkils};
  const devOpsSkiils: SkillGridProp = {name: 'DevOps', skillData: devOpsSkills};

  const [isUIHidden, setIsUIHidden] = useState(false);

  const toggleSkillUI = () => {
    setIsUIHidden((prev) => !prev);
  }
    
  return (
    <div className='space-y-4'>
        <div className='flex'>
            <div
              onClick={toggleSkillUI} 
              className='flex items-center gap-x-4 cursor-pointer'>
              <span className='text-primary-blue text-3xl font-medium' >My Tech Skills</span>
              <BiSolidDownArrow size={22} color='#19ade3' className={`${isUIHidden ? '' : 'rotate-180'}`}/>
            </div>
        </div>
        
        <div className={`overflow-hidden ${isUIHidden ? 'h-0' : 'h-auto'}`}>
            <div className='grid grid-cols-4 gap-8 justify-items-center'>
                <SkillGrid data={frontEndSkills}/>
                <SkillGrid data={uTestingSkills}/>
                <SkillGrid data={backEndSkills}/>
                <SkillGrid data={devOpsSkiils}/>
            </div>
        </div>
    </div>
  )
}

export default SkillList