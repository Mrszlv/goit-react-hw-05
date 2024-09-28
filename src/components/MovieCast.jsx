import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesCredits } from "../servises/FakeApi";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMoviesCredits(movieId)
      .then(setCast)
      .catch(() => {
        setError("Failed to load cast. Please try again later!");
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  // }
  if (error) {
    return <p>{error}</p>;
  }
  if (cast.length === 0) {
    return <p>No cast available for this movies</p>;
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            <p>{actor.name}</p>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieCast;
