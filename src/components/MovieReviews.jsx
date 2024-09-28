import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReview } from "../servises/FakeApi";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReview(movieId).then(setReviews);
  }, [reviews, movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;
