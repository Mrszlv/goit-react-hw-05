import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../servises/FakeApi";
import MovieList from "../../components/MovieLIst/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getAllMobies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch {
        setError("Movies is not found!");
      } finally {
        setLoading(false);
      }
    };
    getAllMobies();
  }, []);

  return (
    <>
      <h2 className={s.title}>Treands Movies</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
