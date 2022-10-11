import React from 'react'
import { projectData } from '../assets/projectData'

const ProjectBox = () => {
    return (
        <div>
            {projectData.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    {item.tech.map((tech) => (
                        <span key={tech}>{tech} </span>
                    ))}
                    <div>
                        <a href={item.sourceCode} target='_blank' rel='noreferrer'>&lt;/&gt; Source Code</a>
                        {item.preview && <a href={item.preview} target='_blank' rel='noreferrer'>Preview</a>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectBox