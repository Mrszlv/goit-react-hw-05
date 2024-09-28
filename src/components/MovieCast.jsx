const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = ({ cast }) => {
  if (!cast || cast / length === 0) {
    return <p>No cast info!</p>;
  }
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
