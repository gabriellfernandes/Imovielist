import { useEffect, useState } from "react";
import { apiFake, apiTMDb, base_ImageUrl } from "../../services/api";
import Lottie from "react-lottie";
import noMovies from "./noMovies.json";
import { IGenres, IMovie } from "./interfaces";
import { DivGeneral } from "./style";
import Header from "../../components/Header";
import { IResponseDetailMovie } from "../../interfaces/axiosReponseApiTmdb";
import { BsSearch } from 'react-icons/bs'; 

export const UserProfile = () => {
	const nameUser = localStorage.getItem("@nameUser");
	const emailUser = localStorage.getItem("@emailUser");
	const avatarUser = localStorage.getItem("@avatarlUser") as string;

	const [genres, setGenres] = useState<IGenres[]>([]);
	const [ratedMovies, setRatedMovies] = useState<any[]>([]);
	const [infoMovies, setInfoMovies] = useState<IMovie[]>([] as IMovie[]);

	useEffect(() => {
		apiTMDb
			.get("/genre/movie/list?language=en-US")
			.then((response) => setGenres(response.data.genres));

		apiFake
			.get("/rating", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("@token")}`,
				},
			})
			.then((response) => setRatedMovies(response.data));
	}, []);

	useEffect(() => {
		ratedMovies.map((movie) => {
			apiTMDb
      .get(`/movie/${movie.id_Movie}`)
      .then((res: IResponseDetailMovie) => {
				setInfoMovies((oldItem: IMovie[]) => [...oldItem, res.data]);
			});
		});
	}, [ratedMovies]);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: noMovies,
	};


  const filterMovies = infoMovies.filter((movie, index) => {
    return infoMovies.indexOf(movie) === index;
  })

	return (
		<>
			<Header />
			<DivGeneral>
				<div className="div-user">
					<div className="div-container-infos-user">
						{
              avatarUser === null || undefined ? 
              <img className="div-avatar" src="https://cdn-icons-png.flaticon.com/512/1695/1695213.png" alt="avatar" />
              :
              <img className="div-avatar" src={avatarUser} alt="avatar" />
            }
						<div className="div-infos-user">
							<p>{nameUser}</p>
							<p>{emailUser}</p>
						</div>
					</div>
					<div className="div-container-input">
						<input type="text" placeholder="Search" className="input-search" />
            <BsSearch className="icon-search"/>
					</div>
					<div className="div-container-genres">
						<div className="div-genres">
							<>
								{genres.map((genre: IGenres, index) => (
									<button
										key={index}
									>
										{genre.name}
										{/* <span>"+""✓"</span> */}
									</button>
								))}
							</>
						</div>
					</div>
					<div className="div-title-favorites">
						<p className="header-favorite">Last movie rated</p>
					</div>
          <div className="div-container-favorites">
          <>
          {
            filterMovies.map((movie: IMovie, index: number) => {
              if (index === 0) {
                return (
                <img 
                  className="image-last-movie-rated"
                  src={`${base_ImageUrl}${movie.backdrop_path}`} 
                  alt="movie" 
                />
                )
              }
            })
          }
          </>
						<div className="favorite-bottom">
            <>
              {
                filterMovies.map((movie: IMovie, index: number) => {
                  if (index === 0) {
                    return (
                    <p key={index} className="movie-star">⭐ {movie.vote_average.toFixed(2)}</p>
                    )
                  }
                })
              }
              </>
							<button className="button-watch">Watch now</button>
						</div>
					</div>
          </div>
				<div className="div-movies">
					<>
						{ratedMovies.length <= 0 ? (
							<div className="div-empty">
								<Lottie
									options={defaultOptions}
									isPaused={false}
									isStopped={false}
									direction={1}
									height={480}
									width={480}
									isClickToPauseDisabled={true}
								/>
							</div>
						) : (
              <ul className="rated-movies">
								{
                filterMovies.map((item: IMovie, index: number) => {
					if (index < 5) {
                    return (
                      <li className="movie-infos" key={index}>
                        <h3 className="title-movie-rated">{item.title}</h3>
                        <div className="div-container-movie-rated">
                        <img className="img-movie-rated" src={`${base_ImageUrl}${item.backdrop_path}`} alt="movie" />
                        <div className="div-rated-votes">
                        <p className="stars-vote">⭐ {item.vote_average.toFixed(2)}</p>
                        <p className="paragraph-movie-rated">{item.overview}</p>
                        </div>
                        </div>
                      </li>
                    )
                  }
								})
                }
							</ul>
						)}
					</>
				</div>
			</DivGeneral>
		</>
	);
};
