import React from 'react'
import { FaLinkedinIn, FaGithub, FaBehanceSquare } from 'react-icons/fa'
import { ImPen } from 'react-icons/im'
import SmallSquares from './hero/SmallSquares'

const Hero = () => {
    return (
        <>
            <div className=' mt-24'>
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta '>
                    Hi, <span className='text-white'>I'm Prince</span>
                    <br />
                    Front End
                    <br />
                    Developer
                </h1>
                <h1 className='relative mt-2 pl-2 text-3xl font-bold text-white border-brand-light-blue border-[1px] w-10/12'>
                    & UI/UX Designer
                    <SmallSquares yPosition={'top-[-4px]'} xPosition={'right-[-4px]'} />
                    <SmallSquares yPosition={'top-[-4px]'} xPosition={'left-[-4px]'} />
                    <SmallSquares yPosition={'bottom-[-4px]'} xPosition={'right-[-4px]'} />
                    <SmallSquares yPosition={'bottom-[-4px]'} xPosition={'left-[-4px]'} />
                    <div className='absolute top-[-34px] right-[-34px]'>
                        <ImPen color='#9FD4F3' />
                    </div>
                    <div className="absolute border-r-[0.5px] top-[-400px] right-[50%] border-dashed border-brand-light-blue h-[400px] opacity-50"></div>
                    <div className="absolute border-b-[0.5px] top-[50%] left-[-40px] border-dashed border-brand-light-blue w-[40px] opacity-50"></div>
                    <p className='absolute right-[36%] bottom-[-30px] font-normal text-sm px-2 rounded-sm bg-brand-light-blue text-brand-blue'>1080 x 740</p>
                </h1>
            </div>
            <h3 className='mt-12 text-white'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic libero possimus aut pariatur necessitatibus eum. Dolorum, voluptatem? Quasi provident facere ad ab mollitia, dolores quam asperiores cum natus quas dolor.
            </h3>
            <div className='flex text-2xl text-brand-light-blue gap-8 mt-6'>
                <FaLinkedinIn />
                <FaGithub />
                <FaBehanceSquare />
            </div>
        </>
    )
}

export default Hero