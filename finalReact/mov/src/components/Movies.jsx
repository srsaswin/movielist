import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Cord from "./Cord";
import axios from "axios";
import Pagination from "./Pagination";
import luffy from '../straw_hat_pirates.jpg'

function Movies() {
  const[Movie, setMovies] = useState([]);
  const[pgnum,setPgnum] = useState(
    ()=>{
      if(localStorage.getItem('pageNum') == null) return 1
      else {
        const pg = JSON.parse(localStorage.getItem('pageNum'));
        console.log(pg);
        return pg
      }
    }
  );
  const[num,setNum] = useState('');
  const[watchList,setWatchList] = useState(
    ()=>{
      if(localStorage.getItem('movies') == null) return [];
      return JSON.parse(localStorage.getItem('movies'));
    }
  )

  function addToWatch(m){ 
    const newWatchlist = [...watchList];
    newWatchlist.push(m);
    localStorage.setItem("movies",JSON.stringify(newWatchlist));
    setWatchList(newWatchlist);
  }

  function removeToWatch(m) { 
    const newWatchlist = watchList.filter(movie => 
      movie.original_title !== m.original_title
    );
    localStorage.setItem("movies",JSON.stringify(newWatchlist));
    addToList(newWatchlist);
  }
  const isInWatchList = (m)=> {  
    return(m.original_title,watchList.some(w=>w.id == m.id)) 
  }
  function nextPage(){ 
    setPgnum(pgnum+1);
  }
  function previusPage(){ 
    if(pgnum > 1)
    setPgnum(pgnum-1)
  }

  useEffect(() => {
    localStorage.setItem("pageNum",JSON.stringify(pgnum));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9e4dead182c68ad6b962e83047b05d9a&language=en-US&page=${pgnum}`
      )
      .then((res) => { 
        const tMovie = res.data.results;
        var bannerObj = tMovie[19]  
        console.log(bannerObj);
        
        setNum(() => bannerObj)
        setMovies(tMovie.splice(0,15))
      });
  }, [pgnum]);

  return (
    <div>
      <Banner name={num}/> 
      <Pagination toNext={nextPage} toPre={previusPage}/>
      <div className="pt-3">
        <div className="text-center text-4xl font-serif pb-[20px]">Members</div>
        <div className="flex flex-row flex-wrap justify-around gap-8">
          {Movie.map((mObj) => {
            return <Cord 
              key={mObj.id}
              ims={`https://image.tmdb.org/t/p/original/${mObj.poster_path}`} 
              name={mObj.title}
              addToWatch={() => addToWatch(mObj)}
              removeToWatch={() => removeToWatch(mObj)} 
              inWatchList={()=>isInWatchList(mObj)}
            />;
          })}
        </div>
      </div>
      <Pagination toNext={nextPage} toPre={previusPage}/>
    </div>
  );
}

export default Movies;