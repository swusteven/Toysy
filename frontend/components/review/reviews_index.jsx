import React from 'react'
import ReviewShow from './review_show';

class ReviewsIndex extends React.Component{
  constructor(props){
    super(props)
  }
 
  componentDidMount(){
    return this.props.fetchAllReviews(this.props.product.id)
  } 
  
  render(){
    const {reviews, currentUserId, editReview} = this.props

    return (
      <>
        <h1 className="product-item-review-title">Reviews for this item <span>{reviews.length}</span></h1>        

        { reviews.length === 0 ? null : 
          reviews.reverse().map((review, idx)=>{ 
            return  <div key={idx.toString()+"reviews"}>
                      <ReviewShow review = {review} currentUserId = {currentUserId} deleteComment={this.props.removeReview} editReview = {editReview}/> 
                    </div>   
          })
        }
      </>
    )
}
};

export default ReviewsIndex


