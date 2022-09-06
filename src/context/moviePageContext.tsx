import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  IReponseCredits,
  IReponseSimilarMovie,
  IResponseDetailMovie,
} from "../interfaces/axiosReponseApiTmdb";
import { apiTMDb } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiFake } from "../services/api";
import { IDataComenter, IDataRating, IMovieContext, IMovieContextProps } from "../interfaces/moviePage/moviePageInterface";
import { AuthContext } from "./authContext";



export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export function MovieContextProvider({ children }: IMovieContextProps) {

  const {movie_id, setMovie_Id} = useContext(AuthContext)
  const [att, setAtt] = useState<Array<number>>([]);
  const [movie, setMovie] = useState<IResponseDetailMovie>(
    {} as IResponseDetailMovie
  );
  const [movieCredits, setMovieCredits] = useState<IReponseCredits>(
    {} as IReponseCredits
  );
  const [movieSimilar, setMovieSimilar] = useState<IReponseSimilarMovie>({} as IReponseSimilarMovie)
  const [loadingMovie, setLoadingMovie] = useState(true);
  const [post, setPost] = useState<IDataComenter>({} as IDataComenter);
  const [postLive, setPostLive] = useState<Array<IDataComenter>>(
    [] as Array<IDataComenter>
  );
  const [avatar, setAvatar] = useState("");
  const [rating, setRating] = useState<IDataRating>({} as IDataRating);

  useEffect(() => {
    apiTMDb
      .get(`/movie/${movie_id}/credits`)
      .then((res: IReponseCredits) => {
        setMovieCredits(res) 
      })

    apiTMDb.get(`/movie/${movie_id}/similar`).then(res => setMovieSimilar(res.data))
    movieCredits && 
    apiTMDb
      .get(`/movie/${movie_id}`)
      .then((res: IResponseDetailMovie) => {
        setMovie(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingMovie(false));
  }, [movie_id]);

  useEffect(() => {
    apiFake
      .get(`640/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then(async (res) => {
        setPostLive(res.data);
        setAvatar(await userAvatar(Number(localStorage.getItem("@idUser"))));
      });
  }, [att]);

  useEffect(() => {
    const intervalId = setInterval(() => { 
      apiFake
      .get(`640/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then(async (res) => {
        setPostLive(res.data);
        setAvatar(await userAvatar(Number(localStorage.getItem("@idUser"))));
      })
    }, 2500)
  
    return () => clearInterval(intervalId);
  }, [useState])

  useEffect(() => {
    postComments(post);
  }, [post]);

  useEffect(() => {
    feedbackPost(rating);
  }, [rating]);

  const postComments = (data: IDataComenter) => {
    if (data.userId === undefined) {
      return;
    }
    toast.promise(apiFake
      .post("/comments", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then(() => {
        setAtt((oldIn) => [...oldIn, 1]);
      }), {
        pending: "Waiting...",
        success: "Create post",
        error: "Error"
      })
  };

  const userAvatar = async (id: number) => {
    return apiFake
      .get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then((res) => res.data.avatar);
  };

  const handleSubmit = (
    evt: React.FormEvent<HTMLFormElement>,
    data: string
  ) => {
    evt.preventDefault();
    setPost({
      id_Movie: movie_id,
      comments: data,
      userId: Number(localStorage.getItem("@idUser")),
      avatar: avatar,
    });
  };

  const feedbackPost = (data: IDataRating) => {
    if (data.userId === undefined) {
      return;
    }
    toast.promise(
    apiFake
      .post("/rating", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      }),{
        pending: "Waiting...",
        success: "Avaliead",
        error: "Error"
      })
  };

  const handleSubmitRating = (data: number) => {
    setRating({
      id_Movie: movie_id,
      rating: Number(data),
      userId: Number(localStorage.getItem("@idUser")),
      avatar: avatar,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movie,
        movieCredits,
        setMovie_Id,
        handleSubmit,
        postLive,
        handleSubmitRating,
        movie_id,
        loadingMovie,
        movieSimilar
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
