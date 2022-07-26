import { ChevronDownIcon } from '@heroicons/react/solid'

function Intro() {
    return (
        <div>
            <div className="bg-[url('/Images/banner.png')] bg-cover h-screen flex flex-col items-center pt-60">
                <h1 className="text-white font-bold text-4xl lg:text-6xl border-2 mt-32 px-2 py-1 backdrop-blur-xl text-center">CENTRAL BARBERS</h1>
                <h1 className="text-[#bf9456] font-semibold text-2xl lg:text-3xl shadow-xl -translate border-2 mt-2 backdrop-blur-xl text-center px-2">01733 358886</h1>
            </div>
            <div className="flex flex-col items-center -translate-y-12 group hover:-translate-y-14 transition duration-200 ease-out">
                <h1 className="text-[#bf9456] font-semibold text-xl opacity-100 group-hover:text-white group-hover:scale-105 transition duration-200 ease-out">SCROLL</h1>
                <ChevronDownIcon className='h-6 fill-[#bf9456] -translate-y-1 group-hover:fill-white group-hover:scale-105 transition duration-200 ease-out' />
            </div>
        </div>
    );
}

export default Intro;