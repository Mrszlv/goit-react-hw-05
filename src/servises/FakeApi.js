import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI1ODRiYTM0OTJmZTg2NGRkZjVlMmZlNWE3M2NiMiIsIm5iZiI6MTcyNzQzOTcwNS42NjAzNzgsInN1YiI6IjY2ZjUyODNiOWEzMTI4OWViNWVkNDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LLIiAsnvdsCaK0-JJ7Kahu9lej17k-YNYMnfOX7fKO8",
  },
};
export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: { query, include_adult: false, language: "en-US", page: 1 },
  });
  return data.results;
};

export const getMovieDetailis = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return data;
};

export const getMoviesCredits = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return data.cast;
};

export const getMoviesReviev = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return data.results;
};

export const getImageUrl = (path) => {
  return path
    ? `${IMAGE_URL}${path}`
    : "https://dummyimage.com/400x600/cdcdcd/000jpg&text=No+poster";
};
