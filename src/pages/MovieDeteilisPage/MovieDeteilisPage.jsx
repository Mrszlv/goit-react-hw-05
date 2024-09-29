import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetailis, getImageUrl } from "../../servises/FakeApi";
import s from "./MovieDeteilisPage.module.css";

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
    <div className={s.wrapp}>
      <Link to={backLink.current}>Go back</Link>
      <h2 className={s.title}>{movie.title}</h2>
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        width="250"
        className={s.img}
      />
      <p className={s.text}>
        {" "}
        <span className={s.span}>Description: </span>
        {movie.overview}
      </p>
      <p className={s.text}>
        {" "}
        <span className={s.span}>Rating:</span> {movie.vote_average}
      </p>
      <p className={s.text}>
        <span className={s.span}>Year: </span>{" "}
        {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
      </p>
      <nav className={s.nav}>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDeteilisPage;
