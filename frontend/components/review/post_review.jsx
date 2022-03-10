import React from 'react'


class PostReview extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      comment: "",
      rating: 1,
      hoverValue: undefined,
      user_id: props.currentUser ? props.currentUser.id : null,
      product_id: this.props.product.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(value){
    this.setState({rating: value})
  }

  handleMouseOver(value){
    this.setState({hoverValue: value})
    // this.setState({rating: value})
  }

  handleMouseLeave(){
    this.setState({hoverValue: undefined})
  }

  handleUpdate(field){
    return (e)=> this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.currentUser){
      this.props.postReview(this.state)
      const textAreafield = document.querySelector(".post-review-textarea")
      textAreafield.value = '';
    } else {
      this.props.history.push('/login')
    }
  }
  
  render(){
    const {reviews} = this.props 
    const stars = Array(5).fill(0)
    return (
      <>
        <h1 className="post-review-title">Post a product review here</h1>
 
        <form onSubmit={this.handleSubmit}>
          {stars.map((_, idx) => {
            return <i className={`fa-solid fa-star ${(this.state.hoverValue || this.state.rating) > idx ? 'review-star-orange' : "review-star-grey"}`} key={idx} 
                      onClick={()=>this.handleClick(idx + 1)}
                      onMouseOver={()=> this.handleMouseOver(idx + 1)}
                      onMouseLeave={()=> this.handleMouseLeave()}
                      > </i>
          })}
          
          <textarea onChange={this.handleUpdate('comment')} 
                    className="post-review-textarea" 
                    cols="30" rows="6" 
                    placeholder='Share your review here with others'>
          </textarea>

          <input className="post-review-submit-btn" type="submit" value="Submit" />
        </form>
      </>
    )
}
};

export default PostReview
