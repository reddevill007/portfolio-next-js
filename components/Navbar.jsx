import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul className="menu__bar">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
                <li>
                    <Link href="/Blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar