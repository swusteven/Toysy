import React from 'react'

//props has currentUser, signup, login and logout
class NavBarCategories extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    return (
      <>
        <div>Baby & Toddler Toys</div>
        <div>Stuffed Animals & Plushies</div>
        <div>Learning & School</div>
        <div>Dolls & Action Figures</div>
      </>
    )
  };
};

export default NavBarCategories