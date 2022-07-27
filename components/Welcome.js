function Welcome() {
    return (
        <div className="grid lg:grid-cols-2 pb-20 bg-gray-100">
            <img src="Images/outside.jpg" className="w-full hidden lg:block h-[500px] object-cover pl-40 pr-10"></img>
            <div className="flex flex-col lg:pl-10 pt-16 items-center lg:items-start">
                <h1 className="font-bold text-5xl w-2/3 text-gray-900 text-center">Welcome to Central Barber Shop</h1>
                <p className="text-gray-800 pt-10">“Our aim is to provide the best haircut in town”</p>
                <p className="w-4/5 text-gray-800 opacity-75 pt-10">Look for the famous red and white barber’s pole and you’ll walk in to a warm welcome, prompt service, smart and modern haircutting, all provided with a sense of traditional barber shop service.</p>
                <p className="w-4/5 text-gray-800 opacity-75 pt-10">With haircuts from £25.00 this is the ideal solution for locals and visitors alike. Enjoy our music, atmosphere and numerous photographs of 50s, 60s and 70s icons. Book for an appointment at a time to suit you on 020 7486 0561</p>
            </div>
        </div>
    );
}

export default Welcome;