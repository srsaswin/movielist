import React from "react";
function Cord({ name, ims }) {
  return (
    <div
      className="bg-center bg-cover h-[50vh] w-[29vh] rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex flex-row items-end"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${ims})` }}
    >
      <div className="bg-blue-400/50  rounded-b-xl text-white    w-full text-center ">
        {name} 
      </div>
    </div>
  );
}

export default Cord;
