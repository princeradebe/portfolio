import React from 'react'
import ProjectCard from './cards/ProjectCard'

const Projects = () => {
    return (
        <div>
            <h2 className='text-3xl text-transparent font-semibold bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>Projects</h2>
            <ProjectCard />
        </div>
    )
}

export default Projects