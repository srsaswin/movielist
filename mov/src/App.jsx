import { useState } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Simpl_count from "./components/Simpl_count";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 

 

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />}/>
          <Route path="/watchlist" element={<WatchList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;