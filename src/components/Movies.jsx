import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Cord from "./Cord";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [Movie, setMovies] = useState([]);
  const[pgnum,setPgnum] = useState(1);
  const[num,setNum] = useState('');
  function nextPage(){
    setPgnum(pgnum+1);
  }
  function previusPage(){
    if(pgnum > 1)
    setPgnum(pgnum-1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9e4dead182c68ad6b962e83047b05d9a&language=en-US&page=${pgnum}`
      )
      .then((res) => { 
        const tMovie = res.data.results;
        var bannerObj = tMovie[19]
        setNum(() => bannerObj)
        setMovies(tMovie.splice(0,18))
      });
  }, [pgnum]);

  return (
    <div>
      <Banner name ={num}/>
      <Pagination toNext={() =>nextPage()} toPre={()=>previusPage()}/>
      <div className="pt-3">
        <div className="text-center text-4xl font-serif pb-[20px]"> Members </div>
        <div className="flex flex-row flex-wrap justify-around gap-8">
          {Movie.map((mObj) => {
            return <Cord ims={mObj.poster_path} name={mObj.original_title} />;
          })}
        </div>
      </div>
      
      <Pagination toNext={() =>nextPage()} toPre={()=>previusPage()}/>
    </div>
  );
}

export default Movies;