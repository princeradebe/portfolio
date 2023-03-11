import React from 'react'
import { FaLinkedinIn, FaGithub, FaBehanceSquare } from 'react-icons/fa'

const Hero = () => {
    return (
        <>
            <div>
                <h1 className='text-4xl font-bold text-white'>
                    Hi, I'm Prince
                    <br />
                    Front End
                    <br />
                    Developer
                </h1>
                <h1 className='text-4xl font-bold text-white'>
                    & UI/UX Designer
                </h1>
            </div>
            <div className='flex text-2xl text-brand-light-blue gap-8 mt-6'>
                <FaLinkedinIn />
                <FaGithub />
                <FaBehanceSquare />
            </div>
        </>
    )
}

export default Hero