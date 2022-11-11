import Link from 'next/link'
import { links } from '../assets/links'

const Navlinks = () => {
    return (
        <div>
            <div className='w-[100%] bg-gray-900 flex text-gray-400 flex-col justify-around items-center text-4xl h-[calc(100vh_-_64px)] md:w-[50%] md:h-[100vh]' >
                {links.map((link) => (
                    <div key={link.id}>
                        {
                            <Link href={link.link}>
                                .{link.title}()
                            </Link>
                        }
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Navlinks