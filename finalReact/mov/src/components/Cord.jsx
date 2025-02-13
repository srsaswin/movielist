import React, { useEffect, useState } from "react";
function Cord({  ims ,name, addToWatch,removeToWatch,inWatchList }) {


  const [isSelect,setSelect] = useState(inWatchList);
  const [icon,setIcon] = useState('😍');

  useEffect(()=>{ 
    setSelect(inWatchList);
    setIcon(isSelect ? '❌' : '😍');
  },[inWatchList]);


  function f() {
    if(!isSelect) { 
      setSelect(true);
      setIcon('❌');
      addToWatch();
    } else { 
      setSelect(false);
      setIcon('😍'); 
      removeToWatch();
    }
  }

  return (
    <>
    <div
      className="bg-center bg-cover h-[50vh] w-[29vh] rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer   grid justify-items-stretch  items-end relative"
      style={{ backgroundImage: `url(${ims})` }}
    >
      <button className=" absolute flex justify-center items-center p-0.5 rounded-lg bg-gray-900/60 top-2 right-2 " onClick={() => f()}>{icon}</button>
      <div className="  bg-blue-400/50   rounded-b-xl text-white  text-center ">
        {name} 
      </div>
    </div>
    </>
  );
}

export default Cord;
