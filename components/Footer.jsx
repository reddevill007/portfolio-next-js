import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className={styles.footer_content}>
                <div className={styles.heading}>
                    <h1>&lt;/&gt;</h1>
                </div>
                <p>&#47;&#47; I am self taught Frontend Web Developer, Web Designer, Photographer, Logo Designer & YouTuber from India</p>
                <ul className={styles.solink}>
                    <li><a href="https://twitter.com/InertiaCode" target="_blank" rel='noreferrer'><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://github.com/reddevill007" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/red._.devill_/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/saurabh-pandey-161348200/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div className={styles.footer_bottom}>
                <p>Copyright <i className="far fa-copyright"></i> 2021 all rights reserved. Made with <i className="fas fa-heart"></i> by <span>Saurabh Pandey</span></p>
            </div>
        </div>
    )
}

export default Footer