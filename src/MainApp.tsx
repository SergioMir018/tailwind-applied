import React from "react"

export const MainApp = () => {

  return (
    <div className="flex flex-col justify-between">
      <div className="divide-y-4 divide-slate-300 p-2 mx-4 mt-2 text-center flex flex-col">
        <h1 className="bg-green-600 text-white p-4 rounded-xl text-lg">
          Hello World!
        </h1>
        <h1 className="bg-yellow-600 text-white p-4 rounded-xl text-lg">
          Hello World!
        </h1>
      </div>
      <div className="flex justify-center">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <button className="group border border-gray-200 p-1 rounded-lg font-bold text-sm text-gray-400  hover:border-blue-400 bg-white transition duration-300">
              <span className="group-hover:text-red-500 transition duration-300">G</span>
              <span className="group-hover:text-yellow-500 transition duration-300">o</span>
              <span className="group-hover:text-green-500 transition duration-300">o</span>
              <span className="group-hover:text-blue-500 transition duration-300">g</span>
              <span className="group-hover:text-red-500 transition duration-300">l</span>
              <span className="group-hover:text-yellow-500 transition duration-300">e</span>  
          </button>
          </a>
        </div>
    </div>
  )
}