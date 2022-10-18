import React from 'react'
import { projectData } from '../assets/projectData'
import styles from '../styles/project.module.css'

const ProjectBox = () => {
    return (
        <div className={styles.project_container}>
            {projectData.map((item) => (
                <div key={item.id}>
                    <div className={styles.project}>
                        <div className={styles.image}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.number}>
                            {item.id}
                        </div>
                        <div className={styles.preview}>
                            <h1>{item.title}</h1>
                            <p>&#47;&#47; {item.desc}</p>
                            <div className={styles.btns}>
                                <a href={item.sourceCode} target='_blank' rel='noreferrer'>&lt;/&gt; Source Code</a>
                                {item.preview && <a href={item.preview} target='_blank' rel='noreferrer'>Preview</a>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectBox
