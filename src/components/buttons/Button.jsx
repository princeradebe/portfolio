import React from 'react'
import Resume from '../../assets/Prince_Radebe_CV.pdf'

const Button = () => {
    const downloadFile = () => {
    }

    return (
        <a href={Resume} download={'Prince_Radebe_CV.pdf'}>
            <button className='text-brand-blue py-2 px-4 bg-brand-light-blue rounded-sm'>Download CV </button>
        </a>
    )
}

export default Button