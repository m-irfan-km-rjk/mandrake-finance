function MNavbar() {
    return(
        <div className="h-[50px] bg-black w-full flex px-2 justify-between items-center">
            <div className="flex gap-2">
                <img src="/Mandrake.png" width={160} height={50} />
            </div>
            <ul className="flex font-bold justify-between w-[25%] text-lg text-white">
                <li className="border-white border-l p-2">Home</li>
                <li className="border-white border-l p-2">About Us</li>
                <li className="border-white border-l p-2">Services</li>
                <li className="border-white border-l p-2">Contact Us</li>
            </ul>
        </div>
    );
}

export default MNavbar;