import { getReviews } from "./_reviews.js";

// Declare contents for later use
let contents;
let months = [
  "Jan",
  "Feb",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dez"
];

export async function get(req, res, next) {
  // If contents is undefined or in production
  if (!contents || process.env.NODE_ENV !== "production") {
    // Call getReviews and the results
    const reviews = getReviews().map(review => ({
      name: review.name,
      rating: review.rating,
      microDataDate: review.date.slice(0, 10),
      date: `${review.date.slice(8, 10)}. ${
        months[parseInt(review.date.slice(5, 7))]
      } ${review.date.slice(0, 4)}`,
      review: review.review
    }));

    const reviewData = {
      count: reviews.length,
      averageRating: (
        reviews
          .map(i => i.rating)
          .reduce((a, b) => parseInt(a) + parseInt(b), 0) / reviews.length
      ).toFixed(2),
      recentReviews: reviews.slice(0, 3),
      allReviews: reviews
    };

    // If reviews is NOT null set headers and stringify
    if (reviews !== null) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(reviewData));
    } else {
      next();
    }
  }
}
