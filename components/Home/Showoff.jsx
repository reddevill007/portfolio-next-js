import React from 'react'
import logo from "../../assets/images/logo.jpg"


const Showoff = () => {
    return (
        <div className='layout md:mt-0 h-fit hidden md:h-fit mx-auto md:flex justify-center items-center pb-4'>
            <div className="w-[90%]">
                <div className="text-3xl lg:text:5xl font-bold mb-2">
                    <h3 className='text-grad'>&lt;Skill Showoff &#47;&gt;</h3>
                </div>
                <div className='flex'>
                    <div className='w-4/12 min-h-[400px] p-5 flex items-center justify-end flex-col'>
                        <div className="flex gap-x-4">
                            <div className="overflow-hidden relative w-10 h-10 bg-purple-900 rounded-full">
                                <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
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
                        <div className="max-w-md py-4 px-8 rounded-lg border-gray-700 bg-gray-800 border relative">
                            <div className="flex justify-center md:justify-end absolute right-10 -top-10">
                                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={logo.src} />
                            </div>
                            <div>
                                <h2 className="text-gray-100 text-3xl font-semibold">Design Tools</h2>
                                <p className="mt-2 text-gray-300">Lorem ipsum dolor sit  suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <a href="#" className="text-xl font-medium text-indigo-500">Code Inertia</a>
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

                <div className="flex items-center justify-center">
                    <div className="w-[95%] min-h-[50px] bg-gray-800 border border-gray-700 flex items-center justify-between px-7 rounded-2xl">
                        <div>
                            <img src={logo.src} alt="logo" className='h-9 w-9 rounded-full' />
                        </div>
                        <div>
                            <ul className='flex gap-x-5 text-gray-400'>
                                <li className='text-grad'>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center h-full'>
                            <button type="button" className="text-white hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500">
                                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                Sign in with Github
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex gap-4 pt-6 w-[95%] mx-auto">
                    <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-gray-900 dark:to-white top-0 left-0 z-10'></div>

                    <div className='w-4/12 flex flex-col gap-y-4'>
                        <nav className="isolate w-full inline-flex mx-auto -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-gray-800 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <span aria-current="page" className="relative z-10 inline-flex items-center border border-grays-500 bg-purple-800 px-4 py-2 text-sm font-medium text-gray-600 focus:z-20">1</span>
                            <span className="relative inline-flex items-center border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</span>
                            <span className="relative hidden items-center border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</span>
                            <span className="relative inline-flex items-center border border-gray-300 bg-gray-800 px-7 py-2 text-sm font-medium text-gray-700">...</span>
                            <span className="relative hidden items-center border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</span>
                            <span className="relative inline-flex items-center border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</span>
                            <span className="relative inline-flex items-center border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</span>
                            <span className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-800 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </nav>

                        <div className="flex flex-wrap gap-2">
                            <button disabled type="button" className="py-2.5 px-5 w-[45%] mr-2 text-sm font-medium rounded-lg borderfocus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center">
                                <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                </svg>
                                Loading...
                            </button>
                            <button disabled type="button" className="py-2.5 px-5 w-[45%] mr-2 text-sm font-medium rounded-lg borderfocus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center">
                                <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                </svg>
                                Loading...
                            </button>

                        </div>
                        <div className="bg-gray-800 py-1 w-11/12 rounded text-center border-b-4 border-red-400 flex justify-center ...">
                            <p className="text-sm w-11/12 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                                recusandae
                                mollitia tenetur quisquam id delectus aliquid a non facilis tempora earum, blanditiis itaque soluta,
                                consectetur corporis deleniti at maiores vero.</p>
                        </div>
                    </div>
                    <div className='w-[66.6666%] h-[240px] rounded-3xl bg-red-900'>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Showoff