
import { LoginForm } from "./pages/login";
import { AxiosPromise, AxiosResponse } from 'axios';
import { useEffect, useState, SetStateAction } from 'react';
import './App.css';
import {IResponseProvidersMovie} from './interfaces/axiosReponseApiTmdb';
import { apiIMDB, apiTMDb, api_keyIMDb, api_keyTMDb, base_Image } from './services/api';
import Home from "./pages/Home";




function App() {
  //const [filme, setfilme] = useState<responseTrailer>({} as responseTrailer)

  //apiTMDb.get(`/movie/top_rated${api_keyTMDb}`).then(res => console.log(res.data))
  //apiIMDB.get(`https://imdb-api.com/API/Search/${api_keyIMDb}/lost 2004`).then(res => setfilme(res.data))
  return (
  <div>
    <Home/>
  </div>
  );
}

export default App;
