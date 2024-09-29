import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { getMovieDetailis, getImageUrl } from "../../servises/FakeApi";
import s from "./MovieDeteilisPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

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
      <NavLink to={backLink.current} className={buildLinkClass}>
        Go back
      </NavLink>
      <h2 className={s.title}>{movie.title}</h2>
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        width="250"
        className={s.img}
      />
      <p className={s.text}>
        Description: <span className={s.span}>{movie.overview}</span>
      </p>
      <p className={s.text}>
        Rating: <span className={s.span}>{movie.vote_average}</span>
      </p>
      <p className={s.text}>
        Year:{" "}
        <span className={s.span}>
          {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
        </span>
      </p>
      <nav className={s.nav}>
        <NavLink to={`/movies/${movieId}/cast`} className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDeteilisPage;
