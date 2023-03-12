import React from 'react'
import Logo from './logo/Logo'

const Footer = () => {
    return (
        <div className='bg-brand-blue-dark px-4 md:px-20'>
            <div className=''>
                <hr className='h-[0.2px] border-0 bg-brand-light-blue opacity-40 mb-8' />
                <div className='md:flex md:justify-between md:align-items-bottom'>
                    <div>
                        <Logo />
                        <p className='text-white text-sm mt-2'>
                            Just so you don’t forget who I am,<br />
                            I am a Front End Developer & UI/UX designer
                            experienced in React.js, Tailwind & Figma.
                        </p>
                    </div>
                    <ul className='flex flex-col md:flex-row md:self gap-4 font-semibold mt-8 text-xl text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>
                        <li className='hover:text-brand-light-blue cursor-pointer'>Projects</li>
                        <li className='hover:text-brand-light-blue cursor-pointer'>Contact</li>
                        <li className='hover:text-brand-light-blue cursor-pointer'>Resume / CV</li>
                    </ul>
                </div>
                <p className='text-brand-light-blue text-xs text-center mt-8 pb-4'> &copy;Copyright {new Date().getFullYear()}, Prince Radebe.</p>
            </div>
        </div>
    )
}

export default Footer