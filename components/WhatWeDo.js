function WhatWeDo() {
    return (
        <div className="bg-white flex flex-col items-center mt-20 pb-20">
            <h1 className="font-bold text-4xl lg:text-6xl text-gray-900">What We Do</h1>
            <p className="text-xl lg:w-2/5 text-center mt-5">We run a men’s barbershop in its best traditions. Our guys will help you look stylish and confident, and most importantly, manly.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-gray-100">
                <div className="flex justify-center items-center mr-10">
                    <div className="flex flex-col items-end pr-10">
                        <h1 className="font-bold text-gray-900">BEARD TRIMMING</h1>
                        <p className="lg:w-3/5 pl-5 lg:pl-0 mt-2">Keep looking your best with regular beard trimming. Just stop by for a beard procedure at the best</p>
                        <p className="font-semibold text-sm text-yellow-700 mt-2">From £15.00</p>
                    </div>
                    <img src="Images/beard.png" className="w-40 shadow-xl"></img>
                </div>
                <div className="flex justify-start items-center ml-10">
                    <img src="Images/scissors.png" className="w-40 shadow-xl"></img>
                    <div className="flex flex-col items-start pl-10">
                        <h1 className="font-bold text-gray-900">HAIRCUT</h1>
                        <p className="lg:w-3/5 mt-2">Our highly trained  Master barbers begin with a thorough consultation before your haircut starts.</p>
                        <p className="font-semibold text-sm text-yellow-700 mt-2">From £25.00</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-gray-100">
                <div className="flex justify-center items-center mr-10">
                    <div className="flex flex-col items-end pr-10">
                        <h1 className="font-bold text-gray-900">SHAVE</h1>
                        <p className="lg:w-3/5 pl-5 lg:pl-0 mt-2">For premium result, we combine modern Technics with traditional ones using classic razors</p>
                        <p className="font-semibold text-sm text-yellow-700 mt-2">From £15.00</p>
                    </div>
                    <img src="Images/razor.png" className="w-40 shadow-xl"></img>
                </div>
                <div className="flex justify-start items-center ml-10">
                    <img src="Images/wash.png" className="w-40 shadow-xl"></img>
                    <div className="flex flex-col items-start pl-10">
                        <h1 className="font-bold text-gray-900">HAIR WASH</h1>
                        <p className="lg:w-3/5 mt-2">Our barbers can fix any dry or discolored hair with our own shampoo and conditioner</p>
                        <p className="font-semibold text-sm text-yellow-700 mt-2">From £25.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;