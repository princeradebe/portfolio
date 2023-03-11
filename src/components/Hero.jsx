import React from 'react'
import { FaLinkedinIn, FaGithub, FaBehanceSquare } from 'react-icons/fa'
import { ImPen } from 'react-icons/im'

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
                <h1 className='relative text-4xl font-bold text-white border-brand-light-blue border-[1px]'>
                    & UI/UX Designer
                    <div className='absolute grid place-items-center top-[-4px] right-[-4px] h-2 w-2 bg-brand-light-blue'>
                        <div className='flex items-center justify-center h-2/3 w-2/3 bg-white'></div>
                    </div>
                    <div className='absolute grid place-items-center top-[-4px] left-[-4px] h-2 w-2 bg-brand-light-blue'>
                        <div className='flex items-center justify-center h-2/3 w-2/3 bg-white'></div>
                    </div>
                    <div className='absolute grid place-items-center bottom-[-4px] left-[-4px] h-2 w-2 bg-brand-light-blue'>
                        <div className='flex items-center justify-center h-2/3 w-2/3 bg-white'></div>
                    </div>
                    <div className='absolute grid place-items-center bottom-[-4px] right-[-4px] h-2 w-2 bg-brand-light-blue'>
                        <div className='flex items-center justify-center h-2/3 w-2/3 bg-white'></div>
                    </div>
                    <div className='absolute top-[-38px] right-[-38px]'>
                        <ImPen color='#9FD4F3' />
                    </div>
                    <div class="absolute border-b-[0.5px] border-dashed border-brand-light-blue h-8 transform rotate-90"></div>
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