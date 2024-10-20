import React from 'react'
import logo from '../zlogo.png'

// if we try to route it  reload the page to avoid it we use Link

import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' flex border-4 space-x-4 pl-3 py-4 font-bold text-4xl text-blue-400'>
      <img className='w-[40px]'  src={logo} />
      {/* <a href='/'>Movies</a>
      <a href='/watchlist'>WatchList</a> */}
      {/* to avoid the reload we use Link eather then <a> */}

      <Link to={'/'}>Movies</Link>
      <Link to={'/watchlist'}>Watchlist</Link>
      </div>
  )
}

export default Navbar