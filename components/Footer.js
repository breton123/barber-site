import { InboxIcon, DeviceMobileIcon , LocationMarkerIcon, ClockIcon } from "@heroicons/react/solid"

function Footer() {
    return (
        <div className="bg-gray-900 pt-40 flex justify-between md:pl-60 pl-20 pb-20 lg:flex-row flex-col">
            <div className="flex flex-col items-start">
                <div className="flex items-center space-x-3 ">
                    <InboxIcon className="h-5 fill-[#bf9456]" />
                    <h1 className="text-[#bf9456] font-medium">INFO@CENTRALBARBERS.COM</h1>
                </div>
                <div className="flex items-center space-x-3 mt-5">
                    <DeviceMobileIcon className="h-5 fill-[#bf9456]" />
                    <h1 className="text-white font-medium">01633 986874</h1>
                </div>
                <div className="flex items-center space-x-3 mt-5">
                    <LocationMarkerIcon className="h-5 fill-[#bf9456]" />
                    <h1 className="text-white font-medium">1A COMMERCIAL ROAD, NP20 2PA</h1>
                </div>
                <div className="flex space-x-3 mt-5">
                    <ClockIcon className="h-5 fill-[#bf9456]" />
                    <div className="flex flex-col">
                        <h1 className="text-white font-medium">MONDAY - FRIDAY</h1>
                        <h1 className="text-white font-medium">9:00 - 19:00</h1>
                    </div>
                </div>
                <div className="flex space-x-3 mt-5">
                    <ClockIcon className="h-5 fill-[#bf9456]" />
                    <div className="flex flex-col">
                        <h1 className="text-white font-medium">WEEKENDS</h1>
                        <h1 className="text-white font-medium">10:00 - 17:00</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:pr-96">
                <div className="flex items-center items-center md:space-x-10 md:flex-row flex-col md:mt-0 mt-10">
                    <input placeholder="NAME" className="bg-gray-900 border-b text-white md:w-auto w-full"></input>
                    <input placeholder="E-MAIL" className="bg-gray-900 border-b text-white md:mt-0 mt-10 md:w-auto w-full"></input>
                </div>
                <input placeholder="MESSAGE" className="bg-gray-900 mt-10 border-b h-40 text-white text-white"></input>
                <div className="flex justify-center mt-10">
                    <button className="bg-[#bf9456] w-full py-2 font-medium">SEND</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;