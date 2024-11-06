
import React from "react";

const About = () => {
    return (
        <div class="min-h-screen bg-white dark:bg-gray-950">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div class="text-center">
                <img src="/images/ersitesblack.png" alt="E-R Sites Logo" class="mx-auto w-48 h-auto mb-8 dark:hidden"></img>
                <img src="/images/ersiteswhite.png" alt="E-R Sites Logo" class="mx-auto w-48 h-auto mb-8 hidden dark:block"></img>
                <h2 class="text-4xl font-bold text-gray-800 dark:text-white">Hypertext Story Project</h2>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-100">This website, Hypertext Story, is an interactive story website where users are allowed to traverse through an engaging story in a number of unique ways that the user can choose.</p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-96 h-1 mt-8 bg-gray-200 border-0 rounded dark:bg-gray-800"></hr>
                </div>
                <h3 class="text-2xl font-bold text-gray-700 dark:text-gray-200 mt-8">Development Projects</h3>
                <p class="mt-4 text-md text-gray-600 dark:text-gray-100">E-R Sites is a development project consisting of multiple high-quality websites that I run, focusing on creating sleek, vibrant, and functional user experiences.</p>
            </div>

            <div class="relative mt-16">

                <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
                    <div class="group relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <img src="/images/grenada.ico" alt="Project Alpha Icon" class="absolute top-4 right-4 w-8 h-8"></img>
                        <h3 class="text-2xl font-bold text-white">Visit Grenada</h3>
                        <p class="mt-4 text-gray-200">A tourism website for a beautiful Caribbean paradise, with a personalised touch and sleek design.</p>
                        <a href="#" class="mt-6 inline-block text-indigo-200 group-hover:underline">Learn More</a>
                    </div>

                    <div class="group relative bg-gradient-to-r from-green-500 to-teal-400 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <img src="/images/portfolio.ico" alt="Project Beta Icon" class="absolute top-4 right-4 w-8 h-8"></img>
                        <h3 class="text-2xl font-bold text-white">My Portfolio</h3>
                        <p class="mt-4 text-gray-200">A personal portfolio that captures the essence of who I am, and what I bring to my projects.</p>
                        <a href="#" class="mt-6 inline-block text-green-200 group-hover:underline">Learn More</a>
                    </div>

                    <div class="group relative bg-gradient-to-r from-pink-500 to-yellow-400 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <img src="/images/ersiteswhite.png" alt="Project Gamma Icon" class="absolute top-4 right-4 w-10 h-8"></img>
                        <h3 class="text-2xl font-bold text-white">E-R Sites</h3>
                        <p class="mt-4 text-gray-200">The home of E-R Sites, a development project encompassing an ever expanding portfolio of unique websites and applications.</p>
                        <a href="#" class="mt-6 inline-block text-yellow-200 group-hover:underline">Learn More</a>
                    </div>

                    <div class="group relative bg-gradient-to-r from-purple-600 to-indigo-500 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <img src="/images/dedication.ico" alt="Project Delta Icon" class="absolute top-4 right-4 w-8 h-8"></img>
                        <h3 class="text-2xl font-bold text-white">Dedication</h3>
                        <p class="mt-4 text-gray-200">An intricate task scheduling website with RPG elements to help users smash their goals.</p>
                        <a href="#" class="mt-6 inline-block text-indigo-200 group-hover:underline">Learn More</a>
                    </div>
                    
                    <div class="group relative bg-gradient-to-r from-teal-500 to-green-500 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <img src="/favicon.ico" alt="Project Delta Icon" class="absolute top-4 right-4 w-8 h-8"></img>
                        <h3 class="text-2xl font-bold text-white">Hypertext Story</h3>
                        <p class="mt-4 text-gray-200">An interactive hypertext based story website.</p>
                        <a href="#" class="mt-6 inline-block text-teal-200 group-hover:underline">Learn More</a>
                    </div>

                    <div class="group relative bg-gradient-to-r from-orange-400 to-red-400 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <h3 class="text-2xl font-bold text-white">Project WindBlocks</h3>
                        <p class="mt-4 text-gray-200">A collection of intricate pre-built Tailwind HTML/CSS components for use in websites.</p>
                        <a href="#" class="mt-6 inline-block text-red-200 group-hover:underline">Coming Soon...</a>
                    </div>
                </div>
            </div>
            <div class="mt-16 mb-24 max-w-5xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white">About E-R Sites</h2>
                <p class="text-gray-600 dark:text-gray-100 mt-4 leading-relaxed">
                    E-R Sites is a collection of high-quality, innovative websites developed to solve a wide range of problems. From task management 
                    to gaming, machine learning, and community engagement, each site is crafted with creativity and functionality in mind. As a part 
                    of this project, our goal is to build vibrant digital spaces that cater to diverse user needs while maintaining top-tier design and 
                    performance.
                </p>
            </div>
        </div>

        </div>
    );
};

export default About;
