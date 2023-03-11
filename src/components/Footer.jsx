import React from 'react'
import Logo from './logo/Logo'

const Footer = () => {
    return (
        <div className='bg-blue-dark'>
            <Logo />
            <p className='text-white text-sm'>
                Just so you don’t forget who I am,

                I am a front end developer & UI/UX designer
                experienced in react, tailwind & figma.
            </p>
            <ul className='text-light-blue font-semibold text-xl'>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume / CV</li>
            </ul>
            <hr className='h-[0.2px] border-0 bg-brand-light-blue opacity-40' />

            <p className='text-brand-light-blue text-xs text-center mt-2'> &copy;Copyright {new Date().getFullYear()}, Prince Radebe</p>
        </div>
    )
}

export default Footer