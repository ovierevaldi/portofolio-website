'use client'

import React, { useRef, useState } from 'react'
import SkillGrid, { SkillGridProp } from './SkillGrid'
import { backendSkills, devOpsSkills, frontEndSkill, uTestingSkils } from '../configs/SkillData';
import DropdownContent from './DropdownContent/DropdownContent';

const SkillList = () => {
    const skillRef = useRef<HTMLDivElement>(null);

    const frontEndSkills : SkillGridProp = {name: 'Front End', skillData: frontEndSkill};
    const backEndSkills : SkillGridProp = {name: 'Back End', skillData: backendSkills};
    const uTestingSkills: SkillGridProp = {name: 'Unit Testings', skillData: uTestingSkils};
    const devOpsSkiils: SkillGridProp = {name: 'DevOps', skillData: devOpsSkills};

    const showSkills: SkillGridProp[] = [frontEndSkills, backEndSkills, uTestingSkills, devOpsSkiils];
    
    const [isSkillListWindowOpen, setIsSKillListWindowOpen] = useState(true);

    const handleToggleDropdownWindowBtn = () => {
      setIsSKillListWindowOpen(!isSkillListWindowOpen)
    }

    return (
      <DropdownContent isOpen={isSkillListWindowOpen} handleToggleButtonClick={handleToggleDropdownWindowBtn} title='Skill List'>
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
      </DropdownContent>
    )
}

export default SkillList