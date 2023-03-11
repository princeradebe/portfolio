import React from 'react'

const SkillsComp = ({ skill, years }) => {
    return (
        <div className='flex justify-between items-baseline'>
            <h3 className='text-2xl text-brand-light-blue font-semibold'>{skill}</h3>
            <p className='text-white'>{years}</p>
        </div>
    )
}

export default SkillsComp