import {apiTMDb} from "./api"
import {IRated, IResponsePopularMovie} from "../interfaces/axiosReponseApiTmdb"

async function GetPopularMovies(page : number)
{

    const popularMovies = await apiTMDb.get<IResponsePopularMovie>("/movie/popular",
    {
        params : 
        {
            language : "en",
            region : "BR",
            page : page,           


        }
    })
    console.log(popularMovies.data)
    return popularMovies.data
}

async  function GetComingSoonMovies(page : number)
{
    const comingSoonMovies = await apiTMDb.get<IResponsePopularMovie>("/movie/upcoming",
    {
        params : 
        {
            language : "en",
            region : "BR",
            page : page
        }
    })
    return comingSoonMovies.data
}
async function GetRatedMovie( page : number)
{
    const ratedMovies = await apiTMDb.get<IRated>("/movie/top_rated",
    {
        params : 
        {
            language : "en",
            region : "BR",
            page : page
        }
    })
    
    return ratedMovies.data
}
export {GetPopularMovies,GetComingSoonMovies,GetRatedMovie}