import React from 'react'
import { FaLinkedinIn, FaGithub, FaBehanceSquare } from 'react-icons/fa'
import { ImPen } from 'react-icons/im'
import SmallSquares from './hero/SmallSquares'

const Hero = () => {
    return (
        <>
            <div>
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta '>
                    Hi, <span className='text-white'>I'm Prince</span>
                    <br />
                    Front End
                    <br />
                    Developer
                </h1>
                <h1 className='relative text-4xl font-bold text-white border-brand-light-blue border-[1px]'>
                    & UI/UX Designer
                    <SmallSquares yPosition={'top'} xPosition={'right'} />
                    <SmallSquares yPosition={'top'} xPosition={'left'} />
                    <SmallSquares yPosition={'bottom'} xPosition={'right'} />
                    <SmallSquares yPosition={'bottom'} xPosition={'left'} />
                    {/* <div className='absolute top-[-38px] right-[-38px]'>
                        <ImPen color='#9FD4F3' />
                    </div> */}
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