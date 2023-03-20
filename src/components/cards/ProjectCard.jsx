import React from 'react'
import { TechStack } from '../../data'
// import Thumb from '../../assets/thumbnails/grozara-thumb_2x.webp'

const ProjectCard = () => {

    return (
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-12 items-start'>
            {
                TechStack.map((item, index) => (
                    <div key={index}>
                        <a href={item.link} target='_blank'>
                            <div className={`w-[100%] h-72 md:h-[600px]  flex flex-col justify-end p-4 ${item.background} bg-cover`}>
                                <h2 className='text-xl md:text-2xl font-semibold'>{item.project}</h2>
                                <p>{item.description}</p>
                            </div>
                        </a>
                        <div className='flex flex-col items-start mb-16'>
                            <h3 className='text-xl md:text-2xl md:font-semibold mt-4 text-white font-medium'>Tech Stack</h3>
                            <div key={index} className='flex gap-2'>
                                {
                                    item.name.map((name, index) => (
                                        <p key={index} className='text-brand-magenta md:text-2xl'>{name} <span className='p-2 text-brand-light-blue'>| </span> </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard