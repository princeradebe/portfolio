import React from 'react'
import ProjectCard from './cards/ProjectCard'

const Projects = () => {
    return (
        <div className='px-4 md:px-20'>
            <h2 className='text-4xl md:text-8xl mt-24 md:mt-40 mb-8 text-transparent font-semibold bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>Projects</h2>
            <ProjectCard />
        </div>
    )
}

export default Projects