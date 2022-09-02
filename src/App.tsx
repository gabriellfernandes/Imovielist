import { ReactElement,useContext, useEffect} from 'react';
import './App.css';
import {PopularMovies} from './services/apiTMDB';
import {popularMovieContext} from "./context/popularMovieContext"
import {base_ImageUrl} from "./services/api"
import RoutesMain from './routes/routes';



function App() : ReactElement {
  
  return(
    <RoutesMain></RoutesMain>
  )
  ;
}

export default App;
