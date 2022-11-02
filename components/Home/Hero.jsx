import React from 'react'
import { AiOutlineGithub } from "react-icons/ai"
import { MdOutlineConnectWithoutContact } from "react-icons/md"

const Hero = () => {
    return (
        <div className='hero'>
            <div>
                <h1 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl">
                    &lt;Hello <span className="text-grad">World</span> &#47;&gt;
                </h1>
            </div>

            <div>
                <h3 className='text-slate-500 text-3xl lg:text:5xl font-bold'>name() ==  <span className="text-grad">&lt;Saurabh Pandey &#47;&gt;</span></h3>
            </div>

            <p className='text-gray-400 text-base lg:text-2xl'>I am a <b>Frontend Developer</b> who enjoys creating thing that lives on the internet. I design and code beautifully simple things, and I love what I do. I want to help people to  bring their ideas to life</p>

            <div className='flex gap-x-5'>
                <a href="#" className='btn'><AiOutlineGithub /> Github</a>
                <a href="#" className='btn'><MdOutlineConnectWithoutContact /> Contact</a>
            </div>
        </div>
    )
}

export default Hero