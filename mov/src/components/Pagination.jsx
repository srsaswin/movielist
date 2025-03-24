import React from 'react'

function Pagination({toNext,toPre}) {
  return (
    <div className='flex flex-row  justify-center pt-10 pb-10 items-end'>
        <button onClick={toPre}  >{`<-`}</button>
        Pagination
        <button onClick={toNext} >{`->`}</button>
    </div>
  )
}

export default Pagination