export const fetchReviews = (productId) =>(
  $.ajax({
    url: `api/products/${productId}/reviews`
  })
);

export const postReview = (data) =>{
  return 
  $.ajax({
    url: "api/reviews",
    method: "POST",
    data: {data}
  })
}


