import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-200 dark:bg-black w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex space-x-6">
                    <Link to="/" className="text-blue-300 hover:text-blue-400 font-extrabold">Home</Link>
                    <Link to="/story" className="text-black dark:text-white font-extrabold">Story</Link>
                    <Link to="/about" className="text-red-600 hover:text-red-700 font-extrabold">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
