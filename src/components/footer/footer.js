import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-black w-full">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-4 px-4 py-4 lg:py-6 md:grid-cols-4">
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/story" className="hover:underline">Story</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-2">
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-center px-4 py-4 bg-gray-200 dark:bg-black">
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/jser7" target="_blank" aria-label="GitHub">

                        </a>
                        <a href="https://instagram.com/jaden.ebb" target="_blank" aria-label="Instagram">

                        </a>
                        <a href="mailto:" aria-label="Email">
                        </a>
                    </div>

                    <a href="/" className="flex items-center space-x-2">
                        <img src="/images/ersitesblack.png" alt="Logo" className="mx-auto h-6 dark:hidden"></img>
                        <img src="/images/ersiteswhite.png" alt="Logo (White)" className="mx-auto h-6 hidden dark:block"></img>
                        <div className="leading-tight">
                            <span className="block text-lg font-semibold tracking-wide text-gray-900 dark:text-gray-400 font-playfair">E-R Websites</span>
                            <span className="block text-xs tracking-wider text-gray-400">EST. 2024</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
