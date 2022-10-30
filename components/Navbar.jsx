import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsCloudMoonFill } from "react-icons/bs"
import logo from "../assets/images/logo.jpg"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='h-[100vh] w-16 border-r border-gray-600 fixed top-0 left-0 flex flex-col justify-between items-center py-5'>
            <div className="relative">
                <Image
                    src={logo.src}
                    alt="logo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full mb-10"
                    width={45}
                    height={45}
                />
                <div className='cursor-pointer w-10 h-10 flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
                    <div>
                        <div className={`w-10 h-[1px] bg-gray-600 mb-3 ${isOpen && "rotate-[45deg]"}`}></div>
                        <div className={`w-10 h-[1px] bg-gray-600 ${isOpen && "rotate-[134deg] translate-y-[-12px]"}`}></div>
                    </div>
                </div>
            </div>

            <div className="text-gray-600">
                <BsCloudMoonFill size={30} />
            </div>

            <div className="relative">
                <Image
                    src={logo.src}
                    alt="logo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    width={45}
                    height={45}
                />
            </div>
        </div>
    )
}

export default Navbar

//<Link Link href = '/' >
//     <li className={router.pathname === '/' ? styles.active : ''}>.home()</li>
//</Link >