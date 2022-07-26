import { ChevronRightIcon } from "@heroicons/react/solid"
import { useRecoilState } from "recoil"
import SidebarAtom from "../atoms/SidebarAtom"

function Sidebar() {
    const [open ,setOpen] = useRecoilState(SidebarAtom);

    return (
        <div className={`${open ? "" : "-translate-x-60"} fixed h-screen w-60 bg-[#1A1D21] left-0 top-0 flex flex-col items-center pt-28 transition duration-500 ease-out`}>
            <h1 className="text-white font-semibold text-xl">CENTRAL BARBERS</h1>
            <span className="bg-white w-4/5 py-[1px] mt-3"></span>
            <div className="flex justify-start w-full pl-5 mt-5 items-center group cursor-pointer">
                <h1 className="text-white font-medium opacity-60 group-hover:opacity-100 transition duration-200 ease-out">What We Do</h1>
                <ChevronRightIcon className="h-7 fill-white group-hover:translate-x-4 opacity-60 group-hover:opacity-100 transition duration-200 ease-out" />
            </div>
            <div className="flex justify-start w-full pl-5 mt-5 items-center group cursor-pointer">
                <h1 className="text-white font-medium opacity-60 group-hover:opacity-100 transition duration-200 ease-out">Barbers</h1>
                <ChevronRightIcon className="h-7 fill-white group-hover:translate-x-4 opacity-60 group-hover:opacity-100 transition duration-200 ease-out" />
            </div>
            <div className="flex justify-start w-full pl-5 mt-5 items-center group cursor-pointer">
                <h1 className="text-white font-medium opacity-60 group-hover:opacity-100 transition duration-200 ease-out">Our Work</h1>
                <ChevronRightIcon className="h-7 fill-white group-hover:translate-x-4 opacity-60 group-hover:opacity-100 transition duration-200 ease-out" />
            </div>
            <div className="flex justify-start w-full pl-5 mt-5 items-center group cursor-pointer">
                <h1 className="text-white font-medium opacity-60 group-hover:opacity-100 transition duration-200 ease-out">Where to Find Us</h1>
                <ChevronRightIcon className="h-7 fill-white group-hover:translate-x-4 opacity-60 group-hover:opacity-100 transition duration-200 ease-out" />
            </div>
            <div className="flex justify-start w-full pl-5 mt-5 items-center group cursor-pointer">
                <h1 className="text-white font-medium opacity-60 group-hover:opacity-100 transition duration-200 ease-out">Contact Us</h1>
                <ChevronRightIcon className="h-7 fill-white group-hover:translate-x-4 opacity-60 group-hover:opacity-100 transition duration-200 ease-out" />
            </div>
        </div>
    );
}

export default Sidebar;