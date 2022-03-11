import React from 'react'


class SearchBar extends React.Component{
  debugger
  constructor(props){
    super(props);
    this.state = {
                  value: ""
                }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const {fetchAllProducts, receieveSearchRequest} = this.props
    fetchAllProducts();
    receieveSearchRequest(this.state)
    this.props.history.push('/search')
  }

  handleUpdate(){
    return (e) => this.setState({["value"]: e.currentTarget.value})
  }
  
  render(){
    return (
      <>
        <form action="" className="nav-bar-search-section">
          <input onChange={this.handleUpdate()} 
                 type="search" 
                 placeholder='Search for anything'/>
        
  
        <button onClick={this.handleSubmit}
                type="submit" 
                className="nav-bar-search-btn">
          <img className="fa-magnifying-glass" src={window.searchBarIcon} alt="" />
        </button>
        </form>
      </>
    )
 }
}

export default SearchBar