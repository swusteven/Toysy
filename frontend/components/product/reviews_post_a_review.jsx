import React from 'react'

class ReviewsPostAReview extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      comment: "",
      rating: 1,
      user_id: null,
      product_id: this.props.product.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUpdate(field){
    return (e)=> this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if (currentUser){
      debugger
      this.setState({["user_id"]: currentUser.id});
      debugger
      this.props.postReview(this.state)
    }
  }
  
  render(){
    const {reviews} = this.props 
    return (
      <>
        <h1 className="post-review-title">Post a product review here</h1>
 
        <form onSubmit={this.handleSubmit}>

          <select onChange={this.handleUpdate('rating')} name="star">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
          </select><br />

          <textarea onChange={this.handleUpdate('comment')} 
                    className="post-review-textarea" 
                    cols="30" rows="10" 
                    placeholder='Share your review here with others'>
          </textarea>

          <input type="submit" value="Submit" />

        </form>
      </>
    )
}
};

export default ReviewsPostAReview
