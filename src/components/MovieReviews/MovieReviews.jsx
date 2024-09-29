import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReview } from "../../servises/FakeApi";

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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieReviews;
