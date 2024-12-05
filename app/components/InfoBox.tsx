'use client'

import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import copyClipboardToast from "../libs/CopyClipboard";

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
    <div className='flex'>
        <div className='border-2 rounded-md px-10 py-3'>
            <p className='text-3xl font-bold mb-4 text-center'>Ovie Revaldi Y</p>
            <div className="space-y-1">
                {
                    infoList.map((info) => 
                    <div
                        key={info.info} 
                        className="flex gap-x-3 items-center">
                        {info.icon} 
                        <p  onClick={() => {info.isLink ? goToURL(info.url, info.type) : ''}}
                            className={`${info.isLink ? 'hover:underline cursor-pointer text-sky-500' : ''}`}>
                            {info.info}
                        </p>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default InfoBox