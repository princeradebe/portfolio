import React from 'react'
import Logo from './logo/Logo'

const Footer = () => {
    return (
        <div className='bg-brand-blue-dark px-4'>
            <hr className='h-[0.2px] border-0 bg-brand-light-blue opacity-40 mb-8' />
            <Logo />
            <p className='text-white text-sm mt-2'>
                Just so you don’t forget who I am,<br />
                I am a Front End Developer & UI/UX designer
                experienced in React.js, Tailwind & Figma.
            </p>
            <ul className='flex flex-col gap-4 font-semibold mt-8 text-xl text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume / CV</li>
            </ul>

            <p className='text-brand-light-blue text-xs text-center mt-8 pb-4'> &copy;Copyright {new Date().getFullYear()}, Prince Radebe.</p>
        </div>
    )
}

export default Footer