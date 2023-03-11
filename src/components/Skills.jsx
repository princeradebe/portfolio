import React from 'react'
import SkillsComp from './skills/SkillsComp'
import {
    SiNextdotjs,
    SiFlutter,
    SiAdobexd,
    SiAmazonaws,
    SiBootstrap,
    SiDocker,
    SiMysql
} from 'react-icons/si'
import { skills } from '../data.js'

const Skills = () => {
    return (
        <>
            <h2 className='text-4xl md:text-8xl mt-24 md:mt-40 mb-8 px-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>Skills</h2>
            {
                skills.map(({ id, skill, years }) => (
                    <SkillsComp key={id} skill={skill} years={years} />
                ))
            }
            <h2 className='text-brand-light-blue px-4 font-semibold md:text-4xl mt-6 md:mt-12 mb-4'>Other Tools</h2>
            <div className='flex justify-between px-4 text-3xl md:text-6xl text-brand-magenta'>
                <SiNextdotjs title='Next.js' />
                <SiFlutter title='Flutter' />
                <SiAdobexd title='Adobe XD' />
                <SiAmazonaws title='Amazon Web Services' />
                <SiBootstrap title='Boostrap 5' />
                <SiDocker title='Docker' />
                <SiMysql title='MySQL' />
            </div>
        </>
    )
}

export default Skills