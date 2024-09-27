import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviev } from "../servises/FakeApi";

const MovieReviews = () => {
  const { moveId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReviev(moveId).then(setReviews);
  }, [moveId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>No reviews validate</p>
      ) : (
        reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default MovieReviews;
