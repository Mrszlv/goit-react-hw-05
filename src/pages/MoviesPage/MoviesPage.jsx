import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { searchMovies } from "../../servises/FakeApi";
import SearchForm from "../../components/SearchForm/SearchForm";
import s from "./MoviesPage.module.css";
import clsx from "clsx";
import Loader from "../../components/Loader/Loader";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    setError(null);
    setLoading(true);
    if (query.trim()) {
      const getMoviesQuery = async () => {
        try {
          const results = await searchMovies(query);
          setMovies(results);
        } catch {
          setError("Failed!");
        } finally {
          setLoading(false);
        }
      };
      getMoviesQuery();
    } else {
      setLoading(false);
      setMovies([]);
    }
  }, [query]);

  return (
    <>
      <SearchForm handleQuery={handleQuery} />
      <h2 className={s.title}>Results</h2>
      {loading && <Loader />}
      {error && <p>{error}</p>}

      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <NavLink to={`/movies/${movie.id}`} className={buildLinkClass}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
