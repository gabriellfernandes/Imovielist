import {apiTMDb} from "./api"
import {IResponsePopularMovie} from "../interfaces/axiosReponseApiTmdb"

async function PopularMovies(page : number)
{

    const popularMovies = await apiTMDb.get<IResponsePopularMovie>("/movie/popular",
    {
        params : 
        {
            page : page
        }
    })
    return popularMovies.data
}
export {PopularMovies}