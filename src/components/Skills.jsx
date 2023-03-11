import React from 'react'
import SkillsComp from './skills/SkillsComp'
import { skills } from '../data.js'

const Skills = () => {
    return (
        <>
            <h2 className='text-4xl mt-24 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>Skills</h2>
            {
                skills.map(({ id, skill, years }) => (
                    <SkillsComp key={id} skill={skill} years={years} />
                ))
            }
        </>
    )
}

export default Skills