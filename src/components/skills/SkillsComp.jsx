import React from 'react'

const SkillsComp = ({ skill, years }) => {
    return (
        <div className='flex px-4 justify-between items-baseline'>
            <h3 className='text-2xl md:text-6xl text-brand-light-blue font-semibold'>{skill}</h3>
            <div className='grow border-b-[0.5px] md:border-b-2 border-dashed border-brand-light-blue opacity-50'></div>
            <p className='text-brand-light-blue font-light md:text-5xl'>{years}</p>
        </div>
    )
}

export default SkillsComp