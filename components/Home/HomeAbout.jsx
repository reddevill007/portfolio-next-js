import { GiDeadWood } from 'react-icons/gi'

const HomeAbout = () => {
    return (
        <div className='layout  md:mt-0 h-fit md:h-fit mx-auto md:flex justify-center items-center md:py-14'>
            <div className="w-[90%]">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                    <h3 className='text-grad text-center mb-7'>&lt;About Me &#47;&gt;</h3>
                </div>
                <div className='flex flex-col justify-center items-start w-[90%] md:w-[80%] lg:w-[70%] mx-auto gap-y-5'>
                    <h3 className='text-slate-500 text-3xl lg:text:5xl font-bold'>Hey! My name is <span className='text-grad'>Saurabh Pandey</span>. I am a <span className="text-grad">front-end developer</span> based in Lucknow</h3>
                    <p className='text-gray-400 text-base lg:text-2xl'>I have been working as a freelance designer and front-end developer since 2021. I've always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.</p>
                    <a href="#" className='btn'>Know More <GiDeadWood className='text-amber-800' /> </a>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout