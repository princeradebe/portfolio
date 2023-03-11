import React from 'react'

import { Squash as Hamburger } from 'hamburger-react'
import Button from './buttons/Button'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <nav className='flex justify-between items-center'>
            <div className='text-2xl text-white font-semibold'>
                Prince
                <span className='text-light-blue text-lg'>
                    .
                </span>
            </div>
            {/* <Button className='hidden' /> */}
            <div className='md:hidden'>
                <Hamburger toggled={open} toggle={setOpen} color='white' alt='menu' />
            </div>
        </nav>
    )
}

export default Navbar