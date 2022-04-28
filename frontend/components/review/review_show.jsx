import React from "react";
import { formatDate } from '../../utils/date_util';

class ReviewShow extends React.Component{
  constructor(props){
    super(props) 
    this.state = {
      display: 'review',
      comment: props.review.comment,
      rating: props.review.rating,
      hoverValue: undefined,
    }
    this.displayComment = this.displayComment.bind(this)
    this.editComment = this.editComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeDisplayStatus(e){
    e.preventDefault();

    if (this.state.display === 'review'){
     return this.setState({display: 'edit'})
    } else {
      return this.setState({display: 'review'})
    }
  }

  handleClick(value){
    this.setState({rating: value})
  }

  handleMouseOver(value){
    this.setState({hoverValue: value})
  }

  handleMouseLeave(){
    this.setState({hoverValue: undefined})
  }

  handleUpdate(field){
    return (e)=> this.setState({[field]: e.currentTarget.value})
  }


  handleSubmit(e){
    e.preventDefault();
    if (this.state.comment === ""){
        const errorField = document.getElementById("review_error")
        errorField.replaceChildren()
        errorField.append("Comment field can't be blank")
      } else {
      this.props.editReview(this.props.review.id, this.state) 
      this.setState({display: 'review'})
    }
 
  }

  editComment(comment, rating){
    return <form onSubmit={this.handleSubmit}>
              <span className='post-review-rating'>Rating: </span>
              {Array(5).fill(0).map((_, idx) => {
                return <i className={`fa-solid fa-star ${(this.state.hoverValue || this.state.rating) > idx ? 'review-star-orange' : "review-star-grey"}`} key={idx} 
                          onClick={()=>this.handleClick(idx + 1)}
                          onMouseOver={()=> this.handleMouseOver(idx + 1)}
                          onMouseLeave={()=> this.handleMouseLeave()}
                          > 
                      </i>
              })}
              
              
              <textarea onChange={this.handleUpdate('comment')} 
                        className="post-review-textarea" 
                        cols="30" rows="4" 
                        placeholder='Share your review here with others'
                        defaultValue={comment}  
                        >
              </textarea>
              <p id="review_error"></p>

              <span className="post-review-submit-btn-container">
                <input className="post-review-submit-btn" type="submit" value="Submit" />
              </span>
              {/* <button onClick={()=>this.setState({display: 'review'})}>Cancel</button> */}
              <button onClick={(e)=>this.changeDisplayStatus(e)}>Cancel</button>
              <br />
              <br />
           </form>
  }

  displayComment(review, currentUserId, deleteComment){
    return <div >
              <span className="product-item-reviewer" >
                    {review.reviewer}
              </span>
              <span className="product-item-review-date">
                    {formatDate(review.updated_at)}
              </span>

              <span onClick={(e)=>this.changeDisplayStatus(e)}
                    className='product-item-review-edit'>
                    {currentUserId === review.user_id ? "EDIT" : null}                           
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
  }

  

  render(){
    const {review, currentUserId, deleteComment} = this.props
    return(
      <div >
          {this.state.display === "review" ? this.displayComment(review, currentUserId, deleteComment) : this.editComment(review.comment, review.rating)}
      </div>
    )
  }
}

export default ReviewShow