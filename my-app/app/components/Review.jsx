// components/Reviews.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/getReview`, {
          params: { placeId },
        });
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.time} className="review">
            <h3>{review.author_name}</h3>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
