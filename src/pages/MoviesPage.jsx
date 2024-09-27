import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../servises/FakeApi";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const submitQuery = searchParams.get("query");

  useEffect(() => {
    const featchMovies = async () => {
      if (!submitQuery) return;
      try {
        const response = await searchMovies(submitQuery);
        setMovies(response);
      } catch (error) {
        alert(error);
      }
    };
    featchMovies();
  }, [submitQuery]);

  return (
    <>
      <SearchForm />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
