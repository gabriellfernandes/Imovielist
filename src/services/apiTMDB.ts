import {apiTMDb} from "./api"
import {IGenres, IGenresRes, IRated, IResponsePopularMovie} from "../interfaces/axiosReponseApiTmdb"

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

    return popularMovies.data
}

async  function GetComingSoonMovies(page : number)
{
    const comingSoonMovies = await apiTMDb.get<IResponsePopularMovie>("/movie/upcoming",
    {
        params : 
        {
            language : "en",
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
async function GetGenresOfMovies()
{
    const genresOfMovies = await apiTMDb.get<IGenresRes>("/genre/movie/list",
    {
        params : 
        {
            language : "en",
        }
    })
    return genresOfMovies.data.genres
}
export {GetPopularMovies,GetComingSoonMovies,GetRatedMovie,GetGenresOfMovies}