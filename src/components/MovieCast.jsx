import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../servises/FakeApi";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { moveId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!moveId) return;
    getMoviesCredits(moveId).then(setCast);
  }, [moveId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <p>{actor.name}</p>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
            width="100"
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
