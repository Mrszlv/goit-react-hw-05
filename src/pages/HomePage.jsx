import { useState, useEffect } from "react";
import { getTrendingMovies } from "../servises/FakeApi";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Treands Movies</h2>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
