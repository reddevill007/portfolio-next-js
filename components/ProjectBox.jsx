import React from 'react'
import { projectData } from '../assets/projectData'
import styled from 'styled-components'

const ProjectBox = () => {
    return (
        <ProContainer>
            {projectData.map((item) => (
                <ProBox key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.desc.slice(0, 60)}...</p>
                    <div>
                        {item.tech.map((tech) => (
                            <span key={tech.id}>{tech.name} </span>
                        ))}
                    </div>
                    <div>
                        <a href={item.sourceCode} target='_blank' rel='noreferrer'>&lt;/&gt; Source Code</a>
                        {item.preview && <a href={item.preview} target='_blank' rel='noreferrer'>Preview</a>}
                    </div>
                </ProBox>
            ))}
        </ProContainer>
    )
}

export default ProjectBox

const ProContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`
const ProBox = styled.div` 
    margin: 20px;
    height: 400px;
    width: 400px;
    border: 2px solid blue;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;