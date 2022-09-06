import Header from "../../components/Header";
import {ContentBox, MainDiv, MovieListBox,theme} from "./style";
import Footer from "../../components/Footer";
import {SimpleSlider} from "../../components/Carousel";
import { popularMovieContext } from "../../context/popularMovieContext";
import { useContext, useEffect} from "react";
import {GetRatedMovie,GetPopularMovies} from "../../services/apiTMDB";
import {RatedContext} from "../../context/ratedContext"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {Button, IconButton, useMediaQuery,ThemeProvider, Typography, Box} from "@mui/material";
import CardItem  from "../../components/CardItem";
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation,Pagination} from "swiper"
import "swiper/css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getVideo, PlayContext } from "../../context/playContext";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';






export default function Home(){

    const navigate = useNavigate();
    const {popularPerPage,SetPopularPerPage,popularMovies,setPopularMovies} = useContext(popularMovieContext)
    const {ratedPages,setRatedPages,ratedPerPage,setRatedPerPage} = useContext(RatedContext)
    const {play,setPlay} = useContext(PlayContext)
    const queryXsBetween = useMediaQuery(theme.breakpoints.down("sm"))
    const queryLgUp = useMediaQuery(theme.breakpoints.up("lg"))
    const querySmBetween = useMediaQuery(theme.breakpoints.between("sm","md"))
    const queryLgBetween = useMediaQuery(theme.breakpoints.between("md","lg"))
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


    function navigateToExpand(group : string){
        const toNavigate = `/extend/${group}`
            navigate(toNavigate, { replace: true });
    }

    return (
        <>
        <Header/>
        <MainDiv>
           <ContentBox>
            <SimpleSlider/>
            <ThemeProvider theme = {theme}>


                <div className="MovieSection">
                    <MovieListBox>

                        <div className="BoxHeader">
                

                        <Box gap={"5px"} alignItems = {'center'} display = "flex" flexDirection={"row"}>
                            <Typography className = "title">Trending</Typography>
                            <LocalFireDepartmentIcon color="primary"></LocalFireDepartmentIcon>
                        </Box>
                       <Button  onClick={()=> navigateToExpand('trending')} size="small" color = "secondary" variant="contained" endIcon = {<LocalMoviesIcon></LocalMoviesIcon>}><Typography>See All</Typography></Button>
                        </div>
                        <div className="BoxMain">
                            <Swiper navigation = {
                                {
                                    nextEl : ".next",
                                    prevEl : ".prev",
                                }} breakpoints = {
                                {
                                    0 : 
                                    { 
                                        slidesPerView : 1,
                                        spaceBetween : 20
                                    },
                                    360 : 
                                    {
                                        slidesPerView : 2,
                                        spaceBetween : 20
                                    },
                                    700 : 
                                    {
                                        slidesPerView : 3,
                                        spaceBetween : 20
                                    },
                                    920 : 
                                    {
                                        slidesPerView : 4,
                                        spaceBetween : 20
                                    }

                                }} modules={[Navigation,Pagination]}>
                                    
                                   <>
                                    {popularMovies.map(({results})=>
                                        {
                                            return results.map((movies,index)=>
                                            {
                                                const videos = getVideo(movies.id)
                                                movies.url = videos                                       
                                                    if(index < 8)
                                                    {
                                                        return(
                                                            <SwiperSlide key={movies.id}>
                                                                <CardItem key={index} movies={movies}></CardItem>
                                                            </SwiperSlide>
                                                        )
                                                    }
                                                })
                                        })}
                                   </> 
                                    <div className="next">
                                        <IconButton color="primary" size="medium">
                                            <NavigateNextIcon fontSize="large"></NavigateNextIcon>
                                        </IconButton>
                                    </div>
                                    <div className="prev">
                                        <IconButton color="primary" size="large">
                                            <NavigateBeforeIcon  fontSize="large"></NavigateBeforeIcon>
                                        </IconButton>
                                    </div>
                            </Swiper>
                        </div>
                    </MovieListBox>
                    <MovieListBox>
                        <div className="BoxHeader">
                        <Box gap={"5px"} alignItems={"center"} display = "flex" flexDirection={"row"}>
                            <Typography className = "title">Top Rated</Typography>
                            <StarsIcon sx = {{paddingBottom : "3px",marginBottom : "3px"}} color = "primary"></StarsIcon>
                        </Box>
                        <Button onClick={()=> navigateToExpand('top')} size="small" color = "secondary" variant="contained" endIcon = {<LocalMoviesIcon></LocalMoviesIcon>}><Typography>See All</Typography></Button>
                        
                        </div>
                        <div className="BoxMain">
                            <Swiper navigation = {
                                    {
                                        nextEl : ".next",
                                        prevEl : ".prev",
                                    }} breakpoints = {
                                    {
                                        0 : 
                                        { 
                                            slidesPerView : 1,
                                            spaceBetween : 20
                                        },
                                        360 : 
                                        {
                                            slidesPerView : 2,
                                            spaceBetween : 20
                                        },
                                        700 : 
                                        {
                                            slidesPerView : 3,
                                            spaceBetween : 20
                                        },
                                        920 : 
                                        {
                                            slidesPerView : 4,
                                            spaceBetween : 20
                                        }

                                    }} modules={[Navigation,Pagination]}>
                                        
                                    <>
                                        {ratedPages.map(({results})=>
                                            {
                                                return results.map((movies,index)=>
                                                {
                                                    const videos = getVideo(movies.id)
                                                    movies.url = videos                                       
                                                        if(index < 8)
                                                        {
                                                            return(
                                                                <SwiperSlide key={movies.id}>
                                                                    <CardItem key={index} movies={movies}></CardItem>
                                                                </SwiperSlide>
                                                            )
                                                        }
                                                    })
                                            })}
                                    </> 
                                        <div className="next">
                                            <IconButton color="primary" size="medium">
                                                <NavigateNextIcon fontSize="large"></NavigateNextIcon>
                                            </IconButton>
                                        </div>
                                        <div className="prev">
                                            <IconButton color="primary" size="large">
                                                <NavigateBeforeIcon  fontSize="large"></NavigateBeforeIcon>
                                            </IconButton>
                                        </div>
                            </Swiper>
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
            </ThemeProvider>
            </ContentBox>
        </MainDiv>
        <Footer/>
        </>

    )
}