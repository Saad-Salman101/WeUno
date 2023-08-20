import React, { useState } from 'react';

const CarousalHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-[#084D74] py-4">
            <div className="container mx-auto flex md:justify-center justify-left items-center">
                <div className="text-white text-lg font-bold">
                   
                </div>
                <div className="hidden md:flex space-x-4">
                    <div className="relative group">
                        <span className="cursor-pointer text-white mx-3">Vitamins & Supplements </span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <div className="relative group">
                        <span className="cursor-pointer text-white mx-3">Devices & Appliances</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <div className="relative group">
                        <span className="cursor-pointer text-white mx-3">Hygiene & Household</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <div className="relative group">
                        <span className="cursor-pointer text-white mx-3">Health Conditions</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <div className="relative group">
                        <span className="cursor-pointer text-white mx-3">Homeopathy</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
            </div>
            {showMenu && (
                <div className="mt-2 space-y-2 bg-white w-full p-2 md:hidden">
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600">Vitamins & Supplements</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600">Devices & Appliances</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600">Hygiene & Household</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600">Health Conditions</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600">Homeopathy</span>
                        <div className="absolute left-0 hidden mt-2 space-y-2 bg-white w-36 p-2 group-hover:block">
                            <a href="#" className="block text-gray-600">Sublink 1</a>
                            <a href="#" className="block text-gray-600">Sublink 2</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default CarousalHeader;
