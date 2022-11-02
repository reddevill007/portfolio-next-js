import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { BsCloudMoonFill, BsSunFill } from "react-icons/bs"

import logo from "../assets/images/logo.jpg"
import Navlinks from './Navlinks'
import { useEffect } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, [])

    const { systemTheme, theme, setTheme } = useTheme()

    const randerThemechanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <BsSunFill className='w-7 h-7' role="button" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <BsCloudMoonFill className='w-7 h-7' role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    return (
        <div>
            <div className='w-[100%] z-10 h-16 border-b px-5 md:h-[100vh] md:w-16 md:border-r border-gray-600 fixed top-0 left-0 flex md:flex-col justify-between items-center md:py-5 md:px-0 bg-slate-900'>
                <div className="text-gray-600">
                    {randerThemechanger()}
                </div>

                <div className='cursor-pointer w-10 h-10 flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
                    <div>
                        <div className={`w-10 h-[1px] bg-gray-600 mb-3 ${isOpen && "rotate-[45deg]"} transition-all duration-300`}></div>
                        <div className={`w-10 h-[1px] bg-gray-600 ${isOpen && "rotate-[134deg] translate-y-[-12px]"} transition-all duration-300`}></div>
                    </div>
                </div>

                <div className="relative">
                    <Image
                        src={logo.src}
                        alt="logo"
                        layout="fill"
                        className="rounded-full  md:mb-10 w-11 h-11 object-cover"
                        width={45}
                        height={45}
                    />
                </div>
            </div>
            <div className={`layout bg-slate-800 z-20 top-[-100%] fixed transition-all duration-1000 ease-in ${isOpen && "top-[64px] md:top-0 md:left-16 left-0"}`}>
                <Navlinks />
            </div>
        </div>
    )
}

export default Navbar

//<Link Link href = '/' >
//     <li className={router.pathname === '/' ? styles.active : ''}>.home()</li>
//</Link >