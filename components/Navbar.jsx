import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    const router = useRouter();
    return (
        <header className={styles.navigation}>
            <div className={styles.nav_logo} id="nav-logo">
                <Link href='/'>
                    <h1>&lt;/&gt;</h1>
                </Link>
            </div>
            <div className={styles.nav_list} id="nav-list">
                <ul>
                    <Link href='/'>
                        <li className={router.pathname === '/' ? styles.active : ''}>.home()</li>
                    </Link>
                    <Link href='/experiments'>
                        <li className={router.pathname === '/experiments' ? styles.active : ''}>.experiment()</li>
                    </Link>
                    <Link href='/who'>
                        <li className={router.pathname === '/who' ? styles.active : ''}>.who()</li>
                    </Link>
                    <Link href='/contact'>
                        <li className={router.pathname === '/contact' ? styles.active : ''}>.contact()</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Navbar