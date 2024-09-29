import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../../servises/FakeApi";
import SearchForm from "../../components/SearchForm/SearchForm";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query.trim()) {
      const getMoviesQuery = async () => {
        try {
          const results = await searchMovies(query);
          setMovies(results);
        } catch {
          setError("Failed!");
        }
      };
      getMoviesQuery();
    } else {
      setMovies([]);
    }
  }, [query]);

  return (
    <>
      <SearchForm handleQuery={handleQuery} />
      <h2>Results</h2>
      {error && <p>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
