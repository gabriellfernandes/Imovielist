import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { MovieContext } from "../../context/moviePageContext";
import { base_ImageUrl } from "../../services/api";
import ReactStars from "react-stars";

export function MoviePage() {
  const navigate = useNavigate()
  
  if(localStorage.getItem("@token") == undefined || localStorage.getItem("@token") == null){
    navigate("/", { replace: true })
  }

  const { movie, handleSubmit, handleSubmitRating ,postLive, movie_id,loadingMovie, movieCredits} = useContext(MovieContext);
  const [input, setInput] = useState("")
  const [pageMax, setPageMax] = useState(10)
  const [pageCastMax, setPageCastMax] = useState(5)
  const [rating, setRating] = useState(0)

  const ratingChanged = (newRating: number) => {
    console.log(newRating)
    setRating(newRating)
    handleSubmitRating(newRating)
  }

  return (
    <>
      <Header />
      {!loadingMovie && (
        <div>
          <div>
            <div>
              <div>
                <h2>{movie.data.title}</h2>
                <h4>
                    Neil GailMan
                    {
                        // nome do diretor
                    }
                    </h4>
                <span>{movie.data.vote_average.toFixed(2)} Rating</span>
              </div>
              <div>
                <h4>Synopsis</h4>
                <p>{movie.data.overview}</p>
                <p>
                  <span>Duration</span> {movie.data.runtime} Min
                </p>
              </div>
            </div>
            {
              movie.data.belongs_to_collection?.poster_path &&
              <img
              src={`${base_ImageUrl}${movie.data.belongs_to_collection?.poster_path}`}
              alt="movie poster"
              />
            }
            
          </div>
          <div>
            <div>
              <h4>Trailer</h4>
              {
                //Colocar o trailer
              }
            </div>
            <div>
              <div>
                <h4>Cast</h4>
                {
                  movieCredits.data.cast.map((elem, i) => {
                    return(
                      i <= pageCastMax &&
                        elem.profile_path != null &&
                      <div key={elem.id}>
                        <img src={`${base_ImageUrl}${elem.profile_path}`} alt="Cast" />
                        <p>{elem.name}</p>
                      </div>
                    )
                    
                  })
                }
                <button onClick={() => setPageCastMax(pageCastMax + 3)}>All Cast</button>
              </div>
              <div>
                <h4>Genre</h4>
                <div>
                  {movie.data.genres.map((elem) => {
                    return <div key={elem.id}>{elem.name}</div>;
                  })}
                </div>
              </div>
              <div>
                <h4>Streaming platforms</h4>
                <div>
                  {movie.data.production_companies.map((elem) => {
                    return (
                      elem.logo_path !== null && (
                        <div key={elem.id}>
                          <img
                            src={`${base_ImageUrl}${elem.logo_path}`}
                            alt="company logo"
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>Comments</h4>
            <div>
                <div>    
                  {
                    postLive.map((elem, i) => {
                        return(
                          elem.id_Movie == movie_id &&
                            i >= postLive.length - pageMax &&
                            <div key={elem.id}>
                                <img src={`${elem.avatar}`} alt="" />
                                <p>{elem.comments}</p>
                            </div>
                        )
                    })
                  }
                  <button onClick={() => setPageMax(pageMax + 5)}>View more</button>
                </div>

                <form onSubmit={(evt) => handleSubmit(evt, input)}>
                    <input placeholder="Comments" onChange={(evt) => setInput(evt.target.value)}/>
                    <button type="submit">Post</button>
                </form>
            </div>
            <div>
              <>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    value={rating}
                    size={24}
                    color2={'#ffc800'} />
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
