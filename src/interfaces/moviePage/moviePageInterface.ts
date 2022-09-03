import { ReactElement, Dispatch, SetStateAction } from "react";
import {
  IReponseCredits,
  IReponseSimilarMovie,
  IResponseDetailMovie,
} from "../axiosReponseApiTmdb";

export interface IMovieContextProps {
  children: ReactElement;
}

export interface IMovieContext {
  movie: IResponseDetailMovie;
  movieSimilar: IReponseSimilarMovie;
  movieCredits: IReponseCredits;
  setMovie_Id: Dispatch<SetStateAction<number>>;
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>, data: string) => void;
  handleSubmitRating: (data: number) => void;
  postLive: Array<IDataComenter>;
  movie_id: number;
  loadingMovie: boolean;
}

export interface IDataComenter {
  id?: number;
  id_Movie: number;
  userId: number;
  comments: string;
  avatar?: string;
}

export interface IDataRating {
  id?: number;
  id_Movie: number;
  userId: number;
  rating: number;
  avatar?: string;
}


