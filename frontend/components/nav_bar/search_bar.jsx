import React from 'react'

const SearchBar = () =>{
    return (
      <>
        <form action="" className="nav-bar-search-section">
          <input type="search" name="" id="" placeholder='Search for anything'/>
        
  
        <button className="nav-bar-search-btn">
          <img className="fa-magnifying-glass" src={window.searchBarIcon} alt="" />
        </button>
        </form>
      </>
    )
}

export default SearchBar