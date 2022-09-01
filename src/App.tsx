import { ReactElement,useContext, useEffect} from 'react';
import './App.css';
import {PopularMovies} from './services/apiTMDB';
import {popularMovieContext} from "./context/popularMovieContext"
import {base_ImageUrl} from "./services/api"



function App() : ReactElement {
  
  const {popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
  useEffect(()=>
  {
    async function getPopularMovies() : Promise<void>
    {
      const popularMovie = await PopularMovies(popularPerPage)
      setPopularMovies((oldresults)=> 
      {
        if(oldresults.length > 0)
        {
          const newResult = oldresults.filter((results)=>
          {
            if(results.page != popularMovie.page)
            {
              return results
            }
          })
          return newResult.concat(popularMovie)
        }
        else
        {
          return oldresults.concat(popularMovie)
        }
      })
    }
    getPopularMovies()
  },[popularPerPage])
  console.log(popularMovies)
  return (
  <div>
    <div>
      <button onClick={()=> SetPopularPerPage((oldPage)=> oldPage + 1)}>Go to Olimpus!</button>
      <ul>
        <>
          {popularMovies && popularMovies.map(({results})=>
          {
            return results.map((movies)=>
            {
              const {poster_path} = movies

              return <li key={movies.id}>
              <p style={{fontSize : "5rem"}}>{movies.title}</p>
              <img width={400} height = {400} src = {`${base_ImageUrl}${poster_path}`}></img>
              </li>
            })
          })}
        </>
      </ul>
    </div>
  </div>
  );
}

export default App;
