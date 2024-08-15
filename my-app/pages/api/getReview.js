// pages/api/getReviews.js
import axios from 'axios';

export default async function handler(req, res) {
  const { placeId } = req.query;

  if (!placeId) {
    return res.status(400).json({ error: 'Place ID is required' });
  }

  const apiKey = process.env.GOOGLE_API_KEY;

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        placeid: placeId,
        key: apiKey,
      },
    });

    const reviews = response.data.result.reviews;
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
