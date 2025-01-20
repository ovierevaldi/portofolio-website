'use client'

import React, { useState } from 'react';
import ipbLogo from '@/public/images/companies/ipb_logo.svg';
import titikPintarLogo from '@/public/images/companies/titik_pintar_logo.png';
import melonGamingLogo from '@/public/images/companies/melon_gaming_logo.jpeg';
import djarumLogo from '@/public/images/companies/djarum_logo.png';
import CompaniesProfile, { CompanyInfoProp } from './CompaniesProfile';
import DropdownContent from '../DropdownContent/DropdownContent';

const companyList: CompanyInfoProp[] = [
    {
        name: 'Institut Pertanian Bogor',
        year: {
            joined: new Date('2019, 02, 01'),
            ended: new Date('2019, 04, 01')
        },
        logo: {
            src: ipbLogo
        },
        description: ''
    },
    {
        name: 'Titik Pintar',
        year: {
            joined: new Date('2019, 09, 01'),
            ended: new Date('2019, 11, 01')
        },
        logo: {
            src: titikPintarLogo
        },
        description: ''
    },
    {
        name: 'Melon Gaming',
        year: {
            joined: new Date('2019, 12, 01'),
            ended: new Date('2024, 06, 01')
        },
        logo: {
            src: melonGamingLogo,
        },
        description: ''
    },
    {
        name: 'Djarum',
        year: {
            joined: new Date('2020, 03, 01'),
            ended: new Date('2020, 05, 01')
        },
        logo: {
            src: djarumLogo
        },
        description: ''
    }
];

const Companies = () => {
    const [isOpenCompaniesWindow, setIsOpenCompaniesWindow] = useState(true);

    const onToggleBtnClicked = () => {
        setIsOpenCompaniesWindow(!isOpenCompaniesWindow);
    }

    return (
        <DropdownContent title='Companies' isOpen={isOpenCompaniesWindow} handleToggleButtonClick={onToggleBtnClicked}>
            <div className='grid grid-cols-4'>
                {
                    companyList.map((company, index) =>
                        <div key={index}>
                            <CompaniesProfile data={company}/>
                        </div>
                    )
                }
            </div>
        </DropdownContent>
    )
}

export default Companies