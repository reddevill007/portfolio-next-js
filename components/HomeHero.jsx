import React from 'react'
import styles from '../styles/heroHome.module.css'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const HomHero = () => {
    return (
        <section className={styles.home}>
            <div className={styles.intro}>
                <h1>&lt;/Hello World&gt;</h1>
                <div id="display">
                    <h3>name() == Saurabh Pandey</h3>
                    <p>&#47;&#47; I am self taught Frontend Web Developer, Web Designer, Photographer, Logo Designer & YouTuber from India</p>
                </div>
                <a href="assests/resume.pdf" className={styles.resume_btn} download><AiOutlineCloudDownload /> Download Resume</a>
            </div>
        </section>
    )
}

export default HomHero