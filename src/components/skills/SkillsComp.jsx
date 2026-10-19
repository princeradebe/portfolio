import React from 'react'

const SkillsComp = ({ skill, years }) => {
    return (
        <>
            <div className='flex items-baseline min-w-0'>
                <h3 className='text-2xl md:text-6xl text-brand-light-blue font-semibold'>{skill}</h3>
                <div className='grow border-b-[0.5px] md:border-b-2 border-dashed border-brand-light-blue opacity-50'></div>
            </div>
            <p className='text-brand-light-blue font-light md:text-5xl whitespace-nowrap'>{years}</p>
        </>
    )
}

export default SkillsComp
