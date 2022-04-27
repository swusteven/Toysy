import React from 'react'
import ReviewShow from './review_show';

class ReviewsIndex extends React.Component{
  constructor(props){
    super(props)
    // this.deleteComment = this.deleteComment.bind(this)
  }
 
  componentDidMount(){
    return this.props.fetchAllReviews(this.props.product.id)
  } 

  // deleteComment(reviewID){
  //   return this.props.removeReview(reviewID)
  // }
  
  render(){
    const {reviews, currentUserId} = this.props

    return (
      <>
        <h1 className="product-item-review-title">Reviews for this item <span>{reviews.length}</span></h1>
        
        { reviews.length === 0 ? null : 
          reviews.reverse().map((review, idx)=>{ 
              return <div key={idx.toString()+"reviews"}>
                        <ReviewShow review = {review} currentUserId = {currentUserId} deleteComment={this.props.removeReview}/> 
                    </div>   
          })
        }
      </>
    )
}
};

export default ReviewsIndex


