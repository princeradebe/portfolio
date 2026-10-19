import React from 'react'
import SkillsComp from './skills/SkillsComp'
import {
    SiMicrosoftazure,
    SiFlutter,
    SiLinux,
    SiAmazonaws,
    SiBootstrap,
    SiDocker,
    SiMysql
} from 'react-icons/si'
import { skills } from '../data.js'

const currentYear = new Date().getFullYear()

const Skills = () => {
    return (
        <>
            <h2 className='text-4xl md:text-8xl mt-24 md:mt-40 mb-8 px-4 md:px-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>Skills</h2>
            <div className='grid grid-cols-[1fr_auto] items-baseline px-4 md:px-20'>
                {
                    skills.map(({ id, skill, since }) => {
                        const years = currentYear - since
                        return <SkillsComp key={id} skill={skill} years={`${years} Year${years === 1 ? '' : 's'} Experience`} />
                    })
                }
            </div>
            <h2 className='text-brand-light-blue px-4 md:px-20 font-semibold md:text-4xl mt-6 md:mt-12 mb-4'>Other Tools</h2>
            <div className='flex justify-between px-4 md:px-20 text-3xl md:text-6xl text-brand-magenta'>
                <SiMicrosoftazure title='Microsoft Azure' className='hover:text-brand-light-blue' />
                <SiFlutter title='Flutter' className='hover:text-brand-light-blue' />
                <SiLinux title='Linux' className='hover:text-brand-light-blue' />
                <SiAmazonaws title='Amazon Web Services' className='hover:text-brand-light-blue' />
                <SiBootstrap title='Bootstrap 5' className='hover:text-brand-light-blue' />
                <SiDocker title='Docker' className='hover:text-brand-light-blue' />
                <SiMysql title='MySQL' className='hover:text-brand-light-blue' />
            </div>
        </>
    )
}

export default Skills