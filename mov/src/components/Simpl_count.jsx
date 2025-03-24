import React from "react";

import { useState, useEffect } from "react";
function Simpl_count() {

  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("");

  useEffect(
    ()=>{
      console.log("useEffect");
      document.title = `the count id ${count}`
    },[txt,count]
  )

  return (
    <div className="  flex flex-col justify-center  items-center ">
      {/* jestify-center ie used to keep the element center */}
      <div className="min-full  items-end">count : {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h1>{txt}</h1>
      <input
        className="border border-black hover:cursor-pointer hover:bg-red-400"
        type="text"
        onChange={(e) => setTxt(e.target.value)}
        value={txt}
      />
    </div>
  );
}

export default Simpl_count;
