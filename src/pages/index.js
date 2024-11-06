import React from "react";
import { Link } from "react-router-dom"; 

const Home = () => {
    return (
        <div>
        <section class="relative bg-white py-20 text-center dark:bg-gray-950">
        <div class="mb-8">
        <img src="/images/ersitesblack.png" alt="Logo" class="mx-auto h-16 dark:hidden"></img>
        <img src="/images/ersiteswhite.png" alt="Logo (White)" class="mx-auto h-16 hidden dark:block"></img>
        </div>

        <div class="relative container mx-auto px-4 max-w-3xl">
        <h2 class="text-6xl font-extrabold text-gray-900 leading-tight mb-6 font-playfair dark:text-gray-100">
            A story for the ages.
        </h2>
        <p class="text-lg text-gray-900 mb-10 font-lora dark:text-gray-300">
            Explore and immerse yourself in the interactive story of "TikTok: The Harbringer of Death" now.
        </p>

        <div class="flex justify-center space-x-4">
            <Link to="/story" class="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full shadow-lg text-lg font-medium hover:bg-yellow-400 transition duration-300 ease-in-out">
            Begin Reading
            </Link>
            <Link to="/about" class="bg-transparent border-2 border-gray-600 text-gray-900 py-3 px-8 rounded-full shadow-lg text-lg font-medium hover:text-white transition duration-300 ease-in-out hover:bg-gray-700 dark:text-gray-100 dark:border-gray-400 dark:hover:bg-gray-600">
            Learn More
            </Link>
        </div>
        </div>
        </section>
        </div>
    );
};

export default Home;
