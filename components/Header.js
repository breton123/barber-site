import { MenuIcon, MinusIcon } from '@heroicons/react/outline'
import { useRecoilState } from "recoil"
import SidebarAtom from "../atoms/SidebarAtom"
import ErrorAtom from "../atoms/ErrorAtom"

function Header() {
    const [open ,setOpen] = useRecoilState(SidebarAtom);
    const [openModal ,setOpenModal] = useRecoilState(ErrorAtom);

    function changeSidebar() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <div className="flex justify-between top-0 fixed w-screen py-5 lg:px-5 items-center">
            <div onClick={() => {changeSidebar()}} className="flex justify-start items-center cursor-pointer group">
                {!open &&
                    <MenuIcon className='text-yellow-600 lg:px-8 py-3 h-12 md:p-3 md:h-14 p-3 bg-[#1a1d21] group-hover:bg-[#bf9456] group-hover:text-[#1a1d21] translate-x-1 transition duration-200 ease-out' />
                }
                {open &&
                    <MinusIcon className='text-yellow-600 lg:px-8 py-3 h-12 md:p-3 md:h-14 p-3 bg-[#1a1d21] group-hover:bg-[#bf9456] group-hover:text-[#1a1d21] translate-x-1 transition duration-200 ease-out' />
                }
                
                <h1 className='bg-[#bf9456] group-hover:bg-[#1a1d21] group-hover:text-[#bf9456] px-8 py-3 md:px-11 md:py-4 font-medium transition duration-200 ease-out'>MENU</h1>
            </div>
            <h1 onClick={() => {setOpenModal(true)}} className='bg-[#bf9456] px-8 py-3 md:px-11 md:py-4 font-medium cursor-pointer hover:bg-[#1a1d21] hover:text-[#bf9456] transition duration-200 ease-out'>MAKE AN APPOINTMENT</h1>
        </div>
    );
}

export default Header;