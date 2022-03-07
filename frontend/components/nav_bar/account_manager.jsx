import React from 'react';
import { Link } from 'react-router-dom';

const AccountManager = ({ currentUser, logout, setModalToOpen }) => {
  
  // const logUserOutandRedirect =() => {
  //   return logout();
  //   this.props.history.push('./')
  // }
  
  const display = currentUser ? (
    <ul className="user-menu-main">
      <li className="user-menu-entry">
          <i className="fa-solid fa-circle-user fa-2x"></i>
          <i className="fa-solid fa-sort-down 2x"></i></li>
      <div className="user-menu-dropdown" >
          <div> <i className="fa-solid fa-circle-user fa-2x"></i>   {currentUser.fname}</div>
          <p className="user-menu-clicks-orders"><i className="fa-solid fa-list-check fa-2x"></i>Purchases and Reviews</p>
          <p className="user-menu-clicks-logout" onClick={ logout }><i className="fa-solid fa-right-from-bracket fa-2x fa-flip-horizontal"></i>Log out</p>
      </div>
      
    </ul>

    
  ) :(
    <div>
      <Link className="signin-link" onClick={()=>setModalToOpen()}to="/login" >Sign In</Link>
    </div>
  );
  

  return (
    <div>
        {display}
    </div>
  )
}



export default AccountManager