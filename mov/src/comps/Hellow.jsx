import React from 'react'
import Ban from '../straw_hat_pirates.jpg'; // Import the image correctly

function Hellow(){
    return (
        <>
            <div className='h-[10vh] w-[10vh]' style={{backgroundImage: `url(${Ban})`}}>
                <h1 className='text-center'>Hello</h1>
            </div>
            <div className='flex text-center flex-row items-end'>
                Hello
            </div>
        </>
    )
}

export default Hellow;