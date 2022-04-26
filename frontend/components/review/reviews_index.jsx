import React from 'react'
import { formatDate } from '../../utils/date_util';

class ReviewsIndex extends React.Component{
  constructor(props){
    super(props)
    this.deleteComment = this.deleteComment.bind(this)
  }
 
  componentDidMount(){
    return this.props.fetchAllReviews(this.props.product.id)
  } 

  deleteComment(reviewID){
    return this.props.removeReview(reviewID)
  }
  
  render(){
    const {reviews, currentUserId} = this.props

    return (
      <>
        <h1 className="product-item-review-title">Reviews for this item <span>{reviews.length}</span></h1>
        
        { reviews.length === 0 ? null : 
          reviews.reverse().map((review, idx)=>{ 
            return <div key={idx.toString()+"reviews"}>
                    <span className="product-item-reviewer" 
                          key={idx.toString() + "reviewer"}>
                          {review.reviewer}
                    </span>
                    <span className="product-item-review-date" key={idx.toString() + "date"}>
                          {formatDate(review.created_at)}
                    </span>

                    <span className='product-item-review-edit' key={idx.toString() + 'edit'}>
                          {currentUserId === review.user_id ? "EDIT " : null}                           
                    </span>

                    <span onClick={()=>this.deleteComment(review.id)}
                          className='product-item-review-delete' key={idx.toString() + 'delete'}>
                          {currentUserId === review.user_id ? "DELETE" : null}                           
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


