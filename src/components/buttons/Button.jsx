import React from 'react'
import Resume from '../../assets/Prince_Radebe_CV_2023.pdf'

const Button = () => {
    const downloadFile = () => {
    }

    return (
        <a href={Resume} download={'Prince_Radebe_CV_2023.pdf'}>
            <button className='text-brand-blue py-2 px-4 bg-brand-light-blue rounded-sm'>Download CV </button>
        </a>
    )
}

export default Button