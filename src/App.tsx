import { ReactElement} from 'react';
import './App.css';
import {GetPopularMovies} from './services/apiTMDB';
import {popularMovieContext} from "./context/popularMovieContext"
import RoutesMain from './routes/routes'
import {base_ImageUrl} from "./services/api"

function App() : ReactElement {
  return (
  <div className="App">
      <RoutesMain/>
    </div>
  );
}

export default App;
