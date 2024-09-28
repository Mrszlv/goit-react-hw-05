import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesCredits } from "../servises/FakeApi";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMoviesCredits(movieId).then(setCast);
  }, [cast, movieId]);

  return (
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
  );
};
export default MovieCast;
