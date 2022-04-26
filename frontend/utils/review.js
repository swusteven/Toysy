export const fetchReviews = (productId) =>(
  $.ajax({
    url: `api/products/${productId}/reviews`
  })
);

export const postReview = (data) =>(
  $.ajax({
    url: "api/reviews",
    method: "POST",
    data: {review: data}
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: "DELETE"
  })
)

