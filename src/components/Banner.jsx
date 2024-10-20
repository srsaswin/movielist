import React from 'react';
import Ban from '../straw_hat_pirates.jpg'; // Import the image correctly

function Banner({name}) {
  return (
    <div className='md:h-[200vh]  bg-cover bg-center flex  items-end' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${name.poster_path})` }}> {/* Use url() to set the background image */}
        <div className='  bg-blue-400/50  w-full text-center text-white font-sans font-bold  text-3xl py-5'>
        {name.original_title }</div>
    </div>
  );
}

export default Banner;