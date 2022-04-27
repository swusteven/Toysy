import React from "react";
import { formatDate } from '../../utils/date_util';

class ReviewShow extends React.Component{
  constructor(props){
    super(props)
    
  }

  render(){
    const {review, currentUserId, deleteComment} = this.props
    return(
      
      <div >
          <span className="product-item-reviewer" >
                {review.reviewer}
          </span>
          <span className="product-item-review-date">
                {formatDate(review.created_at)}
          </span>

          <span className='product-item-review-edit'>
                {currentUserId === review.user_id ? "EDIT " : null}                           
          </span>

          <span onClick={()=>deleteComment(review.id)}
                className='product-item-review-delete' >
                {currentUserId === review.user_id ? "DELETE" : null}                           
          </span>

          <p className="product-review-rating-stars" >
            {Array(review.rating).fill().map((ele, idx) => 
                <i className="fa-solid fa-star"  key={idx.toString() +"star"}></i>
            )}
          </p>

          <p className="product-item-comment" >
            {review.comment}
          </p>
      </div>
    )
  }
}

export default ReviewShow