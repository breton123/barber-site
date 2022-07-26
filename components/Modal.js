import { XCircleIcon } from "@heroicons/react/solid"
import { useRecoilState } from "recoil"
import ErrorAtom from "../atoms/ErrorAtom"

function Modal() {
    const [open, setOpen] = useRecoilState(ErrorAtom);

    return (
        <div className={`${!open ? "opacity-0" : "opacity-100"} fixed w-3/4 h-1/2 md:w-1/3 md:h-1/3 bg-white md:left-1/3 md:top-1/3 top-1/3 left-[12%] rounded-lg bg-opacity-50 backdrop-blur-xl border-4 flex flex-col items-center transition duration-200 ease-out`}>
            <div className="flex justify-end w-full p-3">
                <XCircleIcon onClick={() => {setOpen(false)}} className="h-9 fill-[#bf9456] hover:scale-110 transition duration-200 ease-out cursor-pointer" />
            </div>
            <h1 className="text-[#bf9456] font-semibold text-3xl lg:text-5xl">Oops...</h1>
            <h1 className="text-[#bf9456] font-semibold text-2xl lg:text-4xl text-center mt-9">Sorry, we aren't taking appointments at the moment</h1>
        </div>
    );
}

export default Modal;