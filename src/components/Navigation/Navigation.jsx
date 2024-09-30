import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { GoSearch } from "react-icons/go";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.titleWrapp}>
          <GoSearch className={s.icon} />
          <h3>Search movies servis</h3>
        </div>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
