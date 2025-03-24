import React, { useState } from "react";
import ger from './gen.json';
import Cord from "./Cord";
import demImg from "../straw_hat_pirates.jpg";

function WatchList() {
  const [search, setSearch] = useState("");

  const [genreList,setGenreList] = useState([1,2,3,4]);

  const [_watchlistLait, set_wat] = useState(() => {
    if (localStorage.getItem("movies") == null) return [];
    return JSON.parse(localStorage.getItem("movies"));
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function removeToWatch(m) {
    const newWatchlist = _watchlistLait.filter(
      (movie) => movie.original_title !== m.original_title
    );
    localStorage.setItem("movies", JSON.stringify(newWatchlist));
    set_wat(newWatchlist);
  }

  function rateSortDec() {
    const sortedList = [..._watchlistLait].sort(
      (m1, m2) => m1.vote_average - m2.vote_average
    );
    set_wat(sortedList);
  }

  function rateSortAce() {
    const sortedList = [..._watchlistLait].sort(
      (m1, m2) => m2.vote_average - m1.vote_average
    );
    set_wat(sortedList);
  }

  function popularitySortAce() {
    const sorted = [..._watchlistLait].sort(
      (m1, m2) => m1.popularity - m2.popularity
    );
    set_wat(sorted);
  }

  function popularitySortDec() { 
    const sorted = [..._watchlistLait].sort(
      (m1, m2) => m2.popularity - m1.popularity
    );
    set_wat(sorted);
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genreList.map((g, index) => {
          return (
            <div
              key={index}  // Added key prop
              className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl gap-3">
              {g}
            </div>
          );
        })}
      </div>

    

      {/* <div className="flex justify-center my-10 gap-3">
      <Cord id = {1} ims={demImg} name={"cord 1"}/>
      <Cord id = {2} ims={demImg} name={"cord 2"}/>
      </div> */}

      <div className="flex justify-center">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search your movie"
          className="h-[2.5rem] w-[25rem] bg-gray-200 outline-none rounded-lg px-4"
        />
      </div>
      <div className="overflow-hidden border border-gray-200 m-8 rounded-lg ">
        <table className="w-full text-gray-500 text-center">
          <thead className="bg-gray-200 text-gray-600  ">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>
                <div className="flex justify-center">
                  <button onClick={rateSortAce}>↿</button>
                  <div className="pl-1 pr-1">Rating</div>
                  <button onClick={rateSortDec}>⇂</button>
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  <button onClick={popularitySortDec}>↿</button>
                  <div className="pl-1 pr-1">Popularity</div>
                  <button onClick={popularitySortAce}>⇂</button>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="border-cyan-200">
            {_watchlistLait
              .filter((mOBJ) =>
                mOBJ.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((mObj) => {
                return (
                  <tr key={mObj.id} className="border-b border-gray-200">
                    <td>
                      <img
                        className="mx-auto
                       w-32 h-32 object-cover"
                        src={`https://image.tmdb.org/t/p/original/${mObj.backdrop_path}`}
                        alt={mObj.original_title}
                      />
                    </td>
                    <td>{mObj.title}</td>
                    <td>{mObj.vote_average}</td>
                    <td>{mObj.popularity}</td>
                    <td className="px-6 py-4 flex flex-col  ">{
                      mObj.genre_ids.map(g=> <span>{ger[g]}</span>)
                    }</td>
                    <td className="text-red-500 ">
                      <button onClick={() => removeToWatch(mObj)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <h1>{}</h1>
    </>
  );
}

export default WatchList;
