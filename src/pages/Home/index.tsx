import Header from "../../components/Header";
import {ContentBox, MainDiv, MovieListBox,theme} from "./style";
import Footer from "../../components/Footer/index";
import {SimpleSlider} from "../../components/Carousel/index";
import { popularMovieContext } from "../../context/popularMovieContext";
import { useContext, useEffect } from "react";
import {GetRatedMovie,GetPopularMovies} from "../../services/apiTMDB";
import {RatedContext} from "../../context/ratedContext"
import {useMediaQuery} from "@mui/material";
import { CardItem } from "../../components/CardItem/index";

export default function Home(){


    const {popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
    const {ratedPages,ratedPerPage,setRatedPages,setRatedPerPage} = useContext(RatedContext)

    const querySmDown = useMediaQuery(theme.breakpoints.down("sm"))
    const querySmUp = useMediaQuery(theme.breakpoints.up("sm"))
    const querySmBetween = useMediaQuery(theme.breakpoints.between("lg","xl"))
    useEffect(()=>
    {
        async function getPopular()
        {
            const movie = await GetPopularMovies(ratedPerPage)
            setPopularMovies((oldresults)=> 
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
    },[])

    return (
        <>
        <Header/>
        <MainDiv>
           <ContentBox>
                
                <SimpleSlider/>

                <div className="MovieSection">

                    <MovieListBox>
                        <div className="BoxHeader">
                            <span>Trending</span>
                            <button>{'see all >'}</button>
                        </div>
                        <div className="BoxMain">
                                {popularMovies.map(({results})=>
                                {
                                        return results.map((movies,index)=>
                                        {
                                            if(index < 2 && querySmDown)
                                            {
                                                return(
                                                    <CardItem key={movies.id} movies={movies}></CardItem>
                                                )
                                            }
                                            if(index < 3 && querySmBetween)
                                            {
                                                return(
                                                    <CardItem key={movies.id} movies={movies}></CardItem>
                                                )
                                            }
                                            if(index < 4 && querySmUp)
                                            {
                                                return(
                                                    <CardItem key={movies.id} movies={movies}></CardItem>
                                                )
                                            }
                                        })
                                })}
                        </div>
                    </MovieListBox>
                    <MovieListBox>
                        <div className="BoxHeader">
                            <span>Trending</span>
                            <button>{'see all >'}</button>
                        </div>
                        <div className="BoxMain">
                        </div>
                    </MovieListBox>
                    <MovieListBox>
                        <div className="BoxHeader">
                            <span>Trending</span>
                            <button>{'see all >'}</button>
                        </div>
                        <div className="BoxMain">
                        </div>
                    </MovieListBox>
                    <MovieListBox>
                        <div className="BoxHeader">
                            <span>Trending</span>
                            <button>{'see all >'}</button>
                        </div>
                        <div className="BoxMain">
                        </div>
                    </MovieListBox>
                </div>
            </ContentBox>
        </MainDiv>
        <Footer/>
        </>

    )
}