import axios from "axios"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '8abe8a7c56a54bb229ee6bb6e75e30d4';



export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});


export const fetchMovieById = async id => {
  try {
    const { data } = await api.get(`movie/${id}`);
    return data;
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const fetchMovieCast = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/credits`);
    return data;
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const fetchMovieReviews = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/reviews`);
    return data;
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const fetchSearchMovies = async query => {
  try {
    const { data } = await api.get('/search/movie', { params: query });
    return data;
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const fetchMovieTrending = async () => {
  try {
    const { data } = await api.get('/trending/all/day');
    return data;
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const fetchDataMovie = async id => {
  try {
    const { data } = await api.get(`movie/${id}`);
    return data;
  } catch (e) {
    toast.error('Sorry please try again');
  }
};