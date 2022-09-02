import {
  createContext,
  ReactElement,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  IReponseCredits,
  IResponseDetailMovie,
} from "../interfaces/axiosReponseApiTmdb";
import { apiTMDb } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiFake } from "../services/api";

interface IMovieContextProps {
  children: ReactElement;
}

interface IMovieContext {
  movie: IResponseDetailMovie;
  movieCredits: IReponseCredits;
  setMovie_Id: Dispatch<SetStateAction<number>>;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>, data: string) => void;
  handleSubmitRating: (data: number) => void;
  postLive: Array<IDataComenter>;
  movie_id: number;
  loadingMovie: boolean;
}

interface IDataComenter {
  id?: number;
  id_Movie: number;
  userId: number;
  comments: string;
  avatar?: string;
}

interface IDataRating {
  id?: number;
  id_Movie: number;
  userId: number;
  rating: number;
  avatar?: string;
}

export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export function MovieContextProvider({ children }: IMovieContextProps) {
  const [movie_id, setMovie_Id] = useState(90);
  const [att, setAtt] = useState<Array<number>>([]);
  const [movie, setMovie] = useState<IResponseDetailMovie>(
    {} as IResponseDetailMovie
  );
  const [movieCredits, setMovieCredits] = useState<IReponseCredits>(
    {} as IReponseCredits
  );
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
    postComments(post);
  }, [post]);

  useEffect(() => {
    feedbackPost(rating);
  }, [rating]);

  const postComments = (data: IDataComenter) => {
    if (data.userId === undefined) {
      return;
    }

    apiFake
      .post("/comments", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then((res) => {
        setAtt((oldIn) => [...oldIn, 1]);
        toast.success("Postado com sucesso");
      });
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

    apiFake
      .post("/rating", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then((res) => console.log(res.data));
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
