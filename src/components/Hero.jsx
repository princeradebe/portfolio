import { useState, useEffect } from 'react'
import { FaLinkedinIn, FaGithub, FaBehanceSquare } from 'react-icons/fa'
import { ImPen } from 'react-icons/im'
import SmallSquares from './hero/SmallSquares'

const Hero = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <>
            <div className='mt-24 px-4 md:px-20'>
                <h1 className='text-5xl md:text-[10rem] md:leading-[8rem] font-bold md:font-semibold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta '>
                    Hello, <span className='text-white'>I'm Prince</span>
                    <br />
                    Front End
                    <br />
                    Developer
                </h1>
                <h1 className='relative mt-2 pl-2 md:pl-4 md:py-2 text-3xl md:text-7xl lg:text-9xl font-bold md:font-semibold text-white border-brand-light-blue border-[1px] md:border-2 w-10/12'>
                    & UI/UX Designer
                    <SmallSquares yPosition={'top-[-4px]'} xPosition={'right-[-4px]'} />
                    <SmallSquares yPosition={'top-[-4px]'} xPosition={'left-[-4px]'} />
                    <SmallSquares yPosition={'bottom-[-4px]'} xPosition={'right-[-4px]'} />
                    <SmallSquares yPosition={'bottom-[-4px]'} xPosition={'left-[-4px]'} />
                    <div className='absolute top-[-34px] md:top-[-94%] right-[-34px] md:right-[-120px]'>
                        <ImPen color='#9FD4F3' />
                    </div>
                    <div className="absolute border-r-[0.5px] md:border-r-2 -z-50 top-[-400px] md:top-[-800px] right-[50%] border-dashed border-brand-light-blue h-[400px] md:h-[800px] opacity-50"></div>
                    <div className="absolute border-b-[0.5px] md:border-b-2 top-[50%] left-[-40px] md:left-[-80px] border-dashed border-brand-light-blue w-[40px] md:w-[80px] opacity-50"></div>
                    <p className='absolute right-[36%] md:right-[45%] bottom-[-30px] font-normal text-sm px-2 rounded-sm bg-brand-light-blue text-brand-blue'>{screenSize.width} x {screenSize.height}</p>
                </h1>
            </div>
            <h3 className='mt-12 px-4 md:px-20 text-white md:text-3xl'>
                I am a passionate and experienced <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#E1586F] from-[#F1A045]'>front-end developer</span> with a knack for creating visually appealing and user-friendly websites. Whether you need a simple landing page or a complex web application, I have the skills and expertise to bring your vision to life.
            </h3>
            <div className='flex px-4 md:px-20 text-2xl md:text-4xl text-brand-light-blue gap-8 mt-6'>
                <a href='https://www.linkedin.com/in/princeradebe/' target='_blank'>
                    <FaLinkedinIn />
                </a>
                <a href='https://github.com/princeradebe' target='_blank'>
                    <FaGithub />
                </a>
                <a href='https://www.behance.net/princeradebe' target='_blank'>
                    <FaBehanceSquare />
                </a>
            </div>
        </>
    )
}

export default Hero