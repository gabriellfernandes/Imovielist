import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import  CardItem  from "../../components/CardItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { popularMovieContext } from "../../context/popularMovieContext";
import { RatedContext } from "../../context/ratedContext";
import {ComingSoonContext} from "../../context/comingSoonContext";
import { GetComingSoonMovies, GetPopularMovies, GetRatedMovie } from "../../services/apiTMDB";
import { ContentDiv, MainDiv, MoviesDiv, TitleDiv } from "./style";

export default function ExtendList(){
  const { group } = useParams();
    const {popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
    const {ratedPages,ratedPerPage,setRatedPages,setRatedPerPage} = useContext(RatedContext)
    const {coming} = useContext(ComingSoonContext)
    console.log(group)
    useEffect(()=>
    {
        async function getPopular()
        {
            const movie = await GetPopularMovies(popularPerPage)
            setPopularMovies((oldresults)=> 
            {
              if(oldresults.length > 0)
              {
                const newResult = oldresults.filter((results)=>
                {
                  if(results.page !== movie.page)
                  {
                    return results
                  }
                })
                return newResult.concat(movie)
              }
              else
              {
                return oldresults.concat(movie)
              }
            })
        }
        async function getRated()
        {
            const movie = await GetRatedMovie(ratedPerPage)
            setRatedPages((oldresults)=> 
            {
              if(oldresults.length > 0)
              {
                const newResult = oldresults.filter((results)=>
                {
                  if(results.page != movie.page)
                  {
                    return results
                  }
                })
                return newResult.concat(movie)
              }
              else
              {
                return oldresults.concat(movie)
              }
            })
        }
        getPopular()
        getRated()
    },[])


    
    return (
        <>
            <Header/>
            <MainDiv>
                <ContentDiv>
                    <TitleDiv>
                        { group ===  'trending' && (
                          <>
                            <h1>Em Alta</h1>
                            <h3>Filmes que estão bombando!</h3>
                          </>
                        )
                        }

                        { group ===  'top' && (
                          <>
                            <h1>Top-Rated</h1>
                            <h3>Os melhores avaliados</h3>
                          </>
                        )
                        }

                        { group ===  'netflix' && (
                          <>
                            <h1>Netflix</h1>
                            <h3>Catálogo da plataforma</h3>
                          </>
                        )
                        }

                        { group ===  'upcoming' && (
                          <>
                            <h1>Lançamentos</h1>
                            <h3>Filmes que lançaram em breve!</h3>
                          </>
                        )
                        }

                        { group ===  'globo' && (
                          <>
                            <h1>Globoplay</h1>
                            <h3>Catálogo da plataforma</h3>
                          </>
                        )
                        }
                        
                        
                        { group ===  'disney' && (
                          <>
                            <h1>Disney+</h1>
                            <h3>Catálogo da plataforma</h3>
                          </>
                        )
                        }

                        
                        { group ===  'hbom' && (
                          <>
                            <h1>Hbo Max</h1>
                            <h3>Catálogo da plataforma</h3>
                          </>
                        )
                        }
                        
                        { group ===  'prime' && (
                          <>
                            <h1>Prime video</h1>
                            <h3>Catálogo da plataforma</h3>
                          </>
                        )
                        }
              

                    </TitleDiv>
                    { group ===  'trending' && (
                      <MoviesDiv>
                      {popularMovies.map(({results})=>
                                  {
                                      return results.map((movies,index)=>
                                      {
                                          return(
                                                  <CardItem key={movies.id} movies={movies}></CardItem>
                                              )
                                          }
                                  )})}
  
                        
                      </MoviesDiv>
                        )
                        }


                      { group ===  'top' && (

                        <MoviesDiv>
                        {ratedPages.map(({results})=>
                                    {
                                        return results.map((movies,index)=>
                                        {
                                            return(
                                                    <CardItem key={movies.id} movies={movies}></CardItem>
                                                )
                                            }
                                    )})}
    
                          
                        </MoviesDiv>
                        ) 
                        }
      
                </ContentDiv>
            </MainDiv>
            <Footer/>
        </>
    )
}