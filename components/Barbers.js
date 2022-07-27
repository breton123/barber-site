function Barbers() {
    return (
        <div className="bg-gray-800 pt-20 pb-20 flex flex-col items-center shadow-xl">
            <h1 className="text-white font-bold text-6xl">Barbers</h1>
            <div className="lg:grid lg:grid-cols-3 pt-10 flex flex-col lg:space-y-0 space-y-10 items-center">
                <div className="flex flex-col items-center transition duration-300 ease-out cursor-pointer group lg:mr-10 hover:scale-105">
                    <img src="Images/barber1.jpg" className="h-[600px] shadow-xl group-hover:grayscale transition duration-300 ease-out"></img>
                    <div className="flex flex-col items-center absolute pt-60 group-hover:opacity-100 opacity-0 transition duration-300 ease-out">
                        <h1 className="text-[#bf9456] font-bold text-3xl border-2 px-2 backdrop-blur-xl opacity-100 transition duration-300 ease-out">Jonathon</h1>
                        <div className="flex justify-center space-x-3 mt-5">
                            <img src="Images/instagram.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                            <img src="Images/twitter.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                            <img src="Images/facebook.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center transition duration-300 ease-out cursor-pointer group ml-10 mr-10 hover:scale-105">
                    <img src="Images/barber2.jpg" className="h-[600px] shadow-xl group-hover:grayscale transition duration-300 ease-out"></img>
                    <div className="flex flex-col items-center absolute pt-60 group-hover:opacity-100 opacity-0 transition duration-300 ease-out">
                        <h1 className="text-[#bf9456] font-bold text-3xl border-2 px-2 backdrop-blur-xl opacity-100 transition duration-300 ease-out">Katie</h1>
                        <div className="flex justify-center space-x-3 mt-5">
                            <img src="Images/instagram.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                            <img src="Images/twitter.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                            <img src="Images/facebook.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center transition duration-300 ease-out cursor-pointer group lg:ml-10 hover:scale-105">
                    <img src="Images/barber3.jpg" className="h-[600px] shadow-xl group-hover:grayscale transition duration-300 ease-out"></img>
                    <div className="flex flex-col items-center absolute pt-60 group-hover:opacity-100 opacity-0 transition duration-300 ease-out">
                        <h1 className="text-[#bf9456] font-bold text-3xl border-2 px-2 backdrop-blur-xl opacity-100 transition duration-300 ease-out">Husain</h1>
                        <div className="flex justify-center space-x-3 mt-5">
                            <img src="Images/instagram.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                            <img src="Images/twitter.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                            <img src="Images/facebook.png" className="h-10 border-2 rounded-full p-2 backdrop-blur-xl hover:scale-110 transition duration-200 ease-out"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Barbers;