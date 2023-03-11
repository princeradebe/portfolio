import React from 'react'
import { TechStack } from '../../data'

const ProjectCard = () => {

    return (
        <div className='flex flex-col items-center'>

            <div>
                {
                    TechStack.map((item, index) => (
                        <>
                            <div className='w-[90%] h-72 bg-white'>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-lg text-white'>Tech Stack</h3>
                                <div key={index} className='flex'>
                                    {
                                        item.name.map((name, index) => (
                                            <p key={index} className='text-white'>{name} | </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCard