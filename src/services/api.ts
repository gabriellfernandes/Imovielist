import axios from "axios";

export const apiTMDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export const api_keyTMDb = '?api_key=5c3399653ec5331dea8245d00cfda8d4'
export const api_keyIMDb = 'k_sibw9mqi'

export const base_Image = "https://image.tmdb.org/t/p/w500"

export const apiIMDB = axios.create({
    baseURL: 'https://imdb-api.com'
})