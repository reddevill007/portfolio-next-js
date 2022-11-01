import React from 'react'
import logo from "../../assets/images/logo.jpg"


const Showoff = () => {
    return (
        <div className='layout md:mt-0 h-fit hidden md:h-fit mx-auto md:flex justify-center items-center'>
            <div className="w-[90%]">
                <div className="text-3xl lg:text:5xl font-bold mb-2 text-grad">
                    <h3>&lt;Skill Showoff &#47;&gt;</h3>
                </div>
                <div className='flex'>
                    <div className='w-4/12 min-h-[400px] p-5 flex items-center justify-end flex-col'>
                        <div className="flex gap-x-4">
                            <div className="overflow-hidden relative w-10 h-10 bg-purple-900 rounded-full">
                                <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <img className="p-1 w-10 h-10 rounded-full ring-2 ring-purple-900" src={logo.src} alt="Bordered avatar" />
                            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-purple-900 rounded-full">
                                <span className="font-medium text-gray-300">JL</span>
                            </div>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src={logo.src} alt="" />
                                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-gray-800 rounded-full"></span>
                            </div>
                            <div className="flex -space-x-4">
                                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src={logo.src} alt="" />
                                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src={logo.src} alt="" />
                                <img className="w-10 h-10 rounded-full border-2 border-gray-800" src={logo.src} alt="" />
                                <span className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-purple-900 rounded-full border-2 border-white hover:bg-gray-600 cursor-pointer">+99</span>
                            </div>
                        </div>

                    </div>

                    <div className='w-4/12 min-h-[400px] p-5  flex items-center justify-end flex-col'>
                        <div className="max-w-md py-4 px-8 rounded-lg bg-gray-800 border relative">
                            <div className="flex justify-center md:justify-end absolute right-10 -top-10">
                                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={logo.src} />
                            </div>
                            <div>
                                <h2 className="text-gray-100 text-3xl font-semibold">Design Tools</h2>
                                <p className="mt-2 text-gray-300">Lorem ipsum dolor sit  suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
                            </div>
                        </div>
                    </div>

                    <div className='w-4/12 min-h-[400px] p-5  flex items-center justify-end flex-col'>

                        <div className="w-full max-w-sm h-[400px] rounded-lg border shadow-md bg-gray-800 border-gray-700">
                            <div className="flex justify-end px-4 pt-4">
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                </button>

                            </div>
                            <div className="flex flex-col items-center gap-y-5 pb-10">
                                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={logo.src} alt="Bonnie image" />
                                <h5 className="mb-1 text-xl font-medium text-white">Code Inertia</h5>
                                <span className="text-sm text-gray-400">Web Developer</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Add friend</a>
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center rounded-lg border focus:ring-4 focus:outline-none bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-700">Message</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showoff