function MNavbar() {
    return (
        <div className="h-[60px] bg-gradient-to-r from-gray-900 to-indigo-700 w-full flex pl-6 justify-between items-center shadow-md">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/Mandrake.png" width={180} height={50} alt="Logo" />
            </div>

            {/* Navigation Menu */}
            <ul className="grid grid-cols-4 font-semibold text-lg text-white">
                <li className="border-white p-4 hover:bg-blue-500 cursor-pointer transition duration-300 h-full">
                    Home
                </li>
                <li className="border-white p-4 hover:bg-blue-500 cursor-pointer transition duration-300 h-full">
                    About Us
                </li>
                <li className="border-white p-4 hover:bg-blue-500 cursor-pointer transition duration-300 h-full">
                    Services
                </li>
                <li className="border-white p-4 hover:bg-blue-500 cursor-pointer transition duration-300 h-full">
                    Contact Us
                </li>
            </ul>
        </div>
    );
}

export default MNavbar;