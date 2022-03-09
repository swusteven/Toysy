import React from 'react'
import { Link } from 'react-router-dom'

class NavBarCategories extends React.Component{
  constructor(props){
    super(props)
  };
  
  render(){
    return (
      <>
        <Link to="/category/btt">
          <div className='nav-bar-categories-section'>Baby & Toddler Toys</div>  
        </Link>

        <Link to="/category/sap">
          <div className='nav-bar-categories-section'>Stuffed Animals & Plushies</div>
        </Link>
        
        <Link to="/category/ls">
          <div className='nav-bar-categories-section'>Learning & School</div>
        </Link>

        <Link to="/category/daf">
        <div className='nav-bar-categories-section'>Dolls & Action Figures</div>
        </Link>
      </>
    )
  };
};

export default NavBarCategories