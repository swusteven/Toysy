import React from 'react'
import { formatDate } from '../../utils/date_util';

class ReviewsIndex extends React.Component{
  componentDidMount(){
    return this.props.fetchAllReviews(this.props.product.id)
  } 
  
  render(){
    const {reviews} = this.props
    
    return (
      <>
        <h1 className="product-item-review-title">Reviews for this item <span>{reviews.length}</span></h1>
        
        { reviews.length === 0 ? null : 
          reviews.map((review, idx)=>{ 
            return <div key={idx.toString()+"reviews"}>
                    <span className="product-item-reviewer" 
                          key={idx.toString() + "reviewer"}>
                          {review.reviewer}
                    </span>
                    <span className="product-item-review-date" key={idx.toString() + "date"}>
                          {formatDate(review.created_at)}
                    </span>

                    <p className="product-review-rating-stars" key={idx.toString() + "rating-stars"}>
                      {Array(review.rating).fill().map((ele, idx) => 
                          <i className="fa-solid fa-star"  key={idx.toString() +"star"}></i>
                      )}
                    </p>

                    <p className="product-item-comment" key={idx.toString()}>{review.comment}</p>
                  </div>
          })
        }
      </>
    )
}
};

export default ReviewsIndex


