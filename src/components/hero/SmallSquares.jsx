import React from 'react'

const SmallSquares = ({ yPosition, xPosition }) => {
    return (
        <div className={`absolute grid place-items-center ${yPosition}-[-4px] ${xPosition}-[-4px] h-2 w-2 bg-brand-light-blue`}>
            <div className='flex items-center justify-center h-2/3 w-2/3 bg-white'></div>
        </div>
    )
}

export default SmallSquares