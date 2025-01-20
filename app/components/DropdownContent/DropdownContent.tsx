import { BiSolidUpArrow } from "react-icons/bi"

type DropdownContentProp = {
    title: string,
    isOpen: boolean,
    children: React.ReactNode,
    handleToggleButtonClick: () => void
}

const DropdownContent = ({ title, isOpen, children, handleToggleButtonClick } : DropdownContentProp) => {
    const handleOnClick = () => {
        handleToggleButtonClick();
    }

    return (
        <div className='space-y-4 xl:space-y-8'>
            <div className='flex'>
                <div
                onClick={handleOnClick} 
                className='flex items-center gap-x-2 xl:gap-x-4 cursor-pointer'>
                <span className='text-primary-blue text-xl xl:text-3xl font-medium' >{title.toUpperCase()}</span>
                <BiSolidUpArrow 
                    color='#19ade3' 
                    className={`xl:w-8 xl:h-8 ${isOpen ? 'rotate-180' : ''}`}/>
                </div>
            </div>
            
            <div className={`overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
                {children}
            </div>
        </div>
    )
}

export default DropdownContent