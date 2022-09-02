
import React, { useContext,useEffect } from "react";
import { DivCarousel,SpanEdited } from "./style";
import {ComingSoonContext} from "../../context/comingSoonContext"
import {GetComingSoonMovies} from "../../services/apiTMDB"
import { base_ImageUrl } from "../../services/api";
import "swiper/css";
import "swiper/css/navigation";
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from "swiper"
import img from "../../assets/images/movies-removebg-preview.png"
function SimpleSlider()
{
    const {coming,setComing,setComingPerPage,comingPerPage} = useContext(ComingSoonContext)

    useEffect(()=>
    {
        async function Get()
        {
            const comingMovies = await GetComingSoonMovies(comingPerPage).then(res=> res.results)
            const fiveMovies = comingMovies.filter((results,index)=> index < 5 )
            setComing(fiveMovies)
        }
        Get()
    })
    return (
      <DivCarousel>
        <Swiper navigation={true} modules={[Navigation]}>
          {coming.map((movie)=>       
          {
            return (
            <SwiperSlide key={movie.id}>
              <SpanEdited>{movie.original_title}</SpanEdited>
              <img src={`${base_ImageUrl}${movie.backdrop_path}`} alt="" />
              <img className="coming" src={`${img}`} alt='coming soon'></img>
              <p className="date">{movie.release_date}</p>
            </SwiperSlide>
            )
          })}
      </Swiper>
      </DivCarousel>
    );
  }
export {SimpleSlider}