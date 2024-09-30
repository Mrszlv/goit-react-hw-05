import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReview } from "../../servises/FakeApi";
import s from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getReview = async () => {
      try {
        const data = await getMoviesReview(movieId);
        setReviews(data);
      } catch {
        setError("Failed reviews");
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Tis movie has no reviews.</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={s.author}>{review.author}</p>
            <p className={s.text}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieReviews;
