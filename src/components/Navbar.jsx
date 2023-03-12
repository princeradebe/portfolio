import React from 'react'
import Logo from './logo/Logo'

import { Squash as Hamburger } from 'hamburger-react'
import Button from './buttons/Button'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <nav className='flex justify-between items-center px-4 md:px-20'>
            <Logo />
            <div >
                <Button className='hidden' />
            </div>
            {/* <div className='md:hidden'>
                <Hamburger toggled={open} toggle={setOpen} color='white' alt='menu' />
            </div> */}
        </nav>
    )
}

export default Navbar