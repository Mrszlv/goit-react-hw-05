const MovieReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews info!</p>;
  }
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;
