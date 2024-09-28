import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetailis, getImageUrl } from "../servises/FakeApi";

const MovieDeteilisPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.form || "/movies");

  useEffect(() => {
    getMovieDetailis(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) return null;

  return (
    <>
      <Link to={backLink.current}>Go back</Link>
      <h2>{movie.title}</h2>
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} width="250" />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDeteilisPage;
