import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";

const InfoBox = () => {
  return (
    <div className='flex'>
        <div className='border-2 rounded-md px-10 py-3'>
            <p className='text-3xl font-bold mb-4 text-center'>Ovie Revaldi Y</p>
            <div className="">
                <div className="flex gap-x-3 items-center">
                    <CiCalendarDate />
                    <p>Bekasi, 31-July-1998</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <AiOutlineMail />
                    <p>github.com/ovierevaldi</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <FaGithub />
                    <p>revaldiovie3@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoBox