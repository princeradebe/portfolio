import React from 'react'
import SkillsComp from './skills/SkillsComp'
// import { skills } from '../data.js'

const Skills = () => {
    const skills = [
        {
            id: 1,
            skill: 'HTML',
            years: '3 Years Experience'
        },
        {
            id: 2,
            skill: 'CSS',
            years: '3 Years Experience'
        },
        {
            id: 3,
            skill: 'JavaScript',
            years: '3 Years Experience'
        },
        {
            id: 4,
            skill: 'React',
            years: '2 Years Experience'
        },
        {
            id: 5,
            skill: 'Tailwind CSS',
            years: '2 Years Experience'
        },
        {
            id: 6,
            skill: 'Figma',
            years: '3 Years Experience'
        },

    ]
    return (
        <>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-brand-light-blue from-brand-magenta'>Skills</h2>

            {
                skills.map(({ id, skill, years }) => (
                    <SkillsComp key={id} skill={skill} years={years} />
                ))
            }
        </>
    )
}

export default Skills