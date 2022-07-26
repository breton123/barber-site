function Map() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#bf9456] pt-40 flex flex-col items-center pb-40">
                <h1 className="text-white font-bold text-5xl text-center">WHERE TO FIND US</h1>
                <h1 className="text-white font-medium text-xl mt-10">1A Commercial Road</h1>
                <h1 className="text-white font-medium text-xl mt-1">Newport</h1>
                <h1 className="text-white font-medium text-xl mt-1">NP20 2PA</h1>
                <h1 className="text-white font-medium text-xl mt-1">Wales</h1>
                <h1 className="text-white font-medium text-xl mt-10">01633 986874</h1>
            </div>
            <div className="lg:block hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.2309517795848!2d-2.9943061843994823!3d51.58233047964744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e6b8734d2153%3A0xb490ab821f10657a!2sCentral%20Barbers!5e0!3m2!1sen!2suk!4v1658813143311!5m2!1sen!2suk" width="600" height="450" className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Map;