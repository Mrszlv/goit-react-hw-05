import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReview } from "../../servises/FakeApi";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
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

  if (!reviews || reviews.length === 0) {
    return <p>No reviews</p>;
  }
  return (
    <div className={s.wrapp}>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={s.author}>{review.author}</p>
            <p className={s.text}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;
