import React, { useState } from 'react';
import storyData from '../story.json'
import Cookies from "js-cookie"

const Story = () => {
  const [currentStory, setCurrentStory] = useState('intro');
  if (currentStory === "badEnding") {
    Cookies.set("badEnding", "true", { expires: 7 })
  } else if (currentStory === "goodEnding") {
    Cookies.set("goodEnding", "true", { expires: 7 })
  }

  const handleChoice = (next) => {
    if (next === "trueEnding") {
      Cookies.set("trueEnding", "true", { expires: 14 })
      Cookies.remove("badEnding")
      Cookies.remove("goodEnding")
    }


    if (next === "fakeIntro") {
      if (Cookies.get("badEnding") === "true" && Cookies.get("goodEnding") === "true") {
        setCurrentStory(next);
      } else {
        next = "intro"
        setCurrentStory(next);
      } 
    }
    setCurrentStory(next);
  };

  return (
    
    <div className="relative">   
        <div class="text-center mt-32 mb-16">
            <h2 class="text-3xl font-bold font-serif text-black dark:text-white">TikTok: The Harbinger of Death</h2>
            {Cookies.get("trueEnding") === "true" ? <h2 class="text-l font-bold font-serif text-black dark:text-white">You found the <span className="text-l font-bold font-serif bg-gradient-to-br from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">True Ending!</span></h2> : <p></p>} 
            {Cookies.get("badEnding") === "true" ? <h2 class="text-l font-bold font-serif text-black dark:text-white">Something is <span className="text-l font-bold font-serif bg-gradient-to-br from-red-500 to-orange-400 text-transparent bg-clip-text">looming in the air...</span></h2> : <p></p>} 
            {Cookies.get("goodEnding") === "true" ? <h2 class="text-l font-bold font-serif text-black dark:text-white">The heavens <span className="text-l font-bold font-serif bg-gradient-to-br from-green-500 to-purple-400 text-transparent bg-clip-text">bless you...</span></h2> : <p></p>} 
        </div>
      <div className="relative mx-auto items-center text-center mb-64 font-semibold">
        <div className={currentStory === "fakeIntro" ? "min-h-fit h-64 max-h-64 container mx-auto scale-75 md:scale-100 lg:scale-100 p-10 bg-gradient-to-br from-emerald-200 to-teal-400 dark:shadow-white dark:shadow-md rounded-lg shadow-xl  transition duration-250 ease-in-out hover:drop-shadow-md" : currentStory === "badEnding" ? "min-h-fit h-64 max-h-64 container mx-auto scale-75 md:scale-100 lg:scale-100 p-10 bg-gradient-to-br from-red-300 to-blue-400 dark:shadow-white dark:shadow-md rounded-lg shadow-xl transition duration-250 ease-in-out hover:drop-shadow-md" : currentStory === "goodEnding" ? "min-h-fit h-64 max-h-64 container mx-auto scale-75 md:scale-100 lg:scale-100 p-10 bg-gradient-to-br from-yellow-300 to-emerald-400 dark:shadow-white dark:shadow-md rounded-lg shadow-xl transition duration-250 ease-in-out hover:drop-shadow-md" : currentStory === "trueEnding" ? "min-h-fit h-64 max-h-64 container mx-auto scale-75 md:scale-100 lg:scale-100 p-10 bg-gradient-to-br from-gray-300 to-yellow-400 dark:shadow-white dark:shadow-md rounded-lg shadow-xl transition duration-250 ease-in-out hover:drop-shadow-md" : "min-h-fit h-64 max-h-64 container mx-auto scale-75 md:scale-100 lg:scale-100 p-10 bg-gradient-to-br from-teal-300 to-emerald-400 dark:shadow-white dark:shadow-md rounded-lg shadow-xl transition duration-250 ease-in-out hover:drop-shadow-md"}>

          <p className="mb-16">{storyData[currentStory].text}</p>
          <div className="container mx-auto">
            {storyData[currentStory].choices.map((choice, index) => (
              <button className={currentStory === "fakeIntro" ? "mx-4 mt-5 border-black rounded-lg border-2 p-1 shadow-md transition duration-150 ease-in-out hover:scale-110 hover:text-gray-200 hover:shadow-gray-500 hover:bg-gradient-to-br from-orange-500 to-pink-600 shadow-gray-700" : currentStory === "badEnding" ? "mx-4 mt-5 border-black rounded-lg border-2 p-1 shadow-md transition duration-150 ease-in-out hover:scale-110 hover:text-gray-200 hover:shadow-gray-500 hover:bg-gradient-to-br from-pink-300 to-orange-600 shadow-gray-700" : currentStory === "goodEnding" ? "mx-4 mt-5 border-black rounded-lg border-2 p-1 shadow-md transition duration-150 ease-in-out hover:scale-110 hover:text-gray-200 hover:shadow-gray-500 hover:bg-gradient-to-br from-green-500 to-yellow-600 shadow-gray-700" : currentStory === "trueEnding" ? "mx-4 mt-5 border-black rounded-lg border-2 p-1 shadow-md transition duration-150 ease-in-out hover:scale-110 text-bold hover:text-gray-200 hover:shadow-gray-500 hover:bg-gradient-to-br from-red-300 to-blue-400 shadow-gray-700" :  "mx-4 mt-5 border-black rounded-lg border-2 p-1 shadow-md transition duration-150 ease-in-out hover:scale-110 hover:text-gray-200 hover:shadow-gray-500 hover:bg-gradient-to-br from-red-300 to-blue-400 shadow-gray-700"} key={index} onClick={() => handleChoice(choice.next)}>
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
