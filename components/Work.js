import { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/solid"

function Work() {
    const [activeTab, setActiveTab] = useState(0);
    const [showMore, setShowMore] = useState(true);

    return (
        <div className="flex flex-col items-center pt-40 pb-20">
            <h1 className="font-bold text-6xl text-gray-900">Our Work</h1>
            <div className="flex justify-center space-x-5 items-center mt-10">
                <div onClick={() => {setActiveTab(0)}} className={`cursor-pointer ${activeTab==0 ? "bg-gray-900" : "bg-gray-600 bg-opacity-60"}  flex items-center px-3 py-2 transition duration-200 ease-out`}>
                    {activeTab==0 &&
                        <PlusIcon className="h-5 fill-white" />
                    }
                    {activeTab!=0 &&
                        <MinusIcon className="h-5 fill-white" />
                    }
                    
                    <h1 className={`${activeTab==0 ? "text-white" : "text-gray-900"} font-semibold ml-2 transition duration-200 ease-out`}>ALL</h1>
                </div>
                <div onClick={() => {setActiveTab(1)}} className={`cursor-pointer ${activeTab==1 ? "bg-gray-900" : "bg-gray-600 bg-opacity-60"}  flex items-center px-3 py-2 transition duration-200 ease-out`}>
                    {activeTab==1 &&
                        <PlusIcon className="h-5 fill-white" />
                    }
                    {activeTab!=1 &&
                        <MinusIcon className="h-5 fill-gray-900" />
                    }
                    
                    <h1 className={`${activeTab==1 ? "text-white" : "text-gray-900"} font-semibold ml-2 transition duration-200 ease-out`}>FADE</h1>
                </div>
                <div onClick={() => {setActiveTab(2)}} className={`cursor-pointer ${activeTab==2 ? "bg-gray-900" : "bg-gray-600 bg-opacity-60"}  flex items-center px-3 py-2 transition duration-200 ease-out`}>
                    {activeTab==2 &&
                        <PlusIcon className="h-5 fill-white" />
                    }
                    {activeTab!=2 &&
                        <MinusIcon className="h-5 fill-gray-900" />
                    }
                    
                    <h1 className={`${activeTab==2 ? "text-white" : "text-gray-900"} font-semibold ml-2 transition duration-200 ease-out`}>CLASSIC</h1>
                </div>
            </div>
            <div className={`${activeTab==0 ? "flex md:grid" : "hidden"} md:grid-cols-3 lg:grid-cols-4 pt-10 flex-col items-center space-y-5`}>
                <img src="Images/fade1.jpg" className="w-full h-full object-cover pl-5 md:pl-10 pr-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade2.png" className="w-full h-full object-cover px-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade3.png" className="w-full h-full object-cover px-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade4.png" className="w-full h-full object-cover pl-5 pr-5 md:pr-10 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
            </div>
            <div className={`${showMore && activeTab==0 ? "flex md:grid" : "hidden"} ${activeTab==2 ? "flex md:grid" : ""} ${activeTab==1 ? "hidden" : ""}  md:grid-cols-3 lg:grid-cols-4 pt-5 md:pt-10  flex-col items-center space-y-5`}>
                <img src="Images/fade5.jpg" className={`w-full h-full object-cover pl-5 md:pl-10 pr-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105`}></img>
                <img src="Images/fade6.png" className="w-full h-full object-cover px-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade7.jpg" className="w-full h-full object-cover px-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade8.jpg" className="w-full h-full object-cover pl-5 pr-5 md:pr-10 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
            </div>
            <div className={`${showMore && activeTab==0 ? "hidden md:grid" : "hidden"} ${activeTab==1 ? "flex md:grid" : ""} ${activeTab==2 ? "hidden" : ""} md:grid-cols-3 lg:grid-cols-4 pt-5 md:pt-10 flex-col items-center space-y-5`}>
                <img src="Images/fade9.png" className="w-full h-full object-cover pl-5 md:pl-10 pr-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade10.png" className="w-full h-full object-cover px-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade11.png" className="w-full h-full object-cover px-5 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
                <img src="Images/fade12.png" className="w-full h-full object-cover pl-5 pr-5 md:pr-10 shadow-xl grayscale hover:grayscale-0 transition duration-300 ease-out hover:scale-105"></img>
            </div>
            {!showMore &&
                <button onClick={() => {setShowMore(true)}} className={`mt-10 text-gray-900 ${activeTab==0 ? "block" : "hidden"} px-3 py-2 bg-[#bf9456] shadow-xl text-xl font-medium hover:scale-110 transition duration-200 ease-out`}>SHOW MORE</button>
                
            }
            {showMore && 
                <button onClick={() => {setShowMore(false)}} className={`mt-10 text-gray-900 ${activeTab==0 ? "block" : "hidden"} px-3 py-2 bg-[#bf9456] shadow-xl text-xl font-medium hover:scale-110 transition duration-200 ease-out`}>SHOW LESS</button>
            }
            
        </div>
    );
}

export default Work;