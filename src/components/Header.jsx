import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => (
    <header className="z-10 flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="relative w-full max-w-xs">
            <input type="text" placeholder="Cari..." className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <FaSearch className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        </div>
        <div className="flex items-center space-x-6">
            <FaBell className="text-xl text-gray-600 cursor-pointer hover:text-indigo-600" />
            <FaUserCircle className="text-3xl text-gray-600 cursor-pointer hover:text-indigo-600" />
        </div>
    </header>
);
export default Header;