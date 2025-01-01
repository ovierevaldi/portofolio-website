'use client'

import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import copyClipboardToast from "../services/CopyClipboard";

const InfoBox = () => {
    const infoList = [
        {info: 'Bekasi, 31-July-1998', icon: <CiCalendarDate />, isLink: false, type: 'none', url: ''},
        {info: 'github.com/ovierevaldi', icon: <FaGithub />, isLink: true, type:'link', url: 'https://github.com/ovierevaldi'},
        {info: 'revaldiovie3@gmail.com', icon: <AiOutlineMail />, isLink: true, type: 'copy', url: 'revaldiovie3@gmail.com'},
    ]
    
    const goToURL = (url: string, type: string) => {
        if(type === 'link') 
            window.open(url, "_blank");
        else
            copyToClipboard(url);
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        copyClipboardToast();
    }

  return (
    <div 
        className='border text-white bg-primary-blue shadow-md rounded p-4 lg:p-5 space-y-3 lg:space-y-5'>

        <p className='text-2xl xl:text-3xl font-bold text-center'>Ovie Revaldi Y</p>

        <p className="text-center xl:text-xl">Fullstack Developer</p>

        <div className="space-y-1">
            {
                infoList.map((info) => 
                <div
                    key={info.info} 
                    className="flex gap-x-3 items-center justify-center">
                    {info.icon} 
                    <p  
                        onClick={() => 
                            {if(info.isLink) goToURL(info.url, info.type)}}
                        className={`${info.isLink ? 'hover:underline cursor-pointer' : ''}`}>
                        {info.info}
                    </p>
                </div>)
            }
        </div>
    </div>
  )
}

export default InfoBox