import Movies from "../mov/src/components/Movies";
import Navbar from "../mov/src/components/Navbar";
import Simpl_count from "../mov/src/components/Simpl_count";
import WatchList from "../mov/src/components/WatchList";

import { BrowserRouter, Routes , Route} from "react-router-dom";

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
// https://api.themoviedb.org/3/person/popular?api_key=9e4dead182c68ad6b962e83047b05d9a&language=en-US&page=1