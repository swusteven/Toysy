import React from 'react';
import { Link } from 'react-router-dom';

const AccountManager = ({ currentUser, logout, setModalToOpen }) => {
  
  // const logUserOutandRedirect =() => {
  //   return logout();
  //   this.props.history.push('./')
  // }

  const display = currentUser ? (
    <div className="user-menu-dropdown-main">
        <div className="user-menu-account-entry-main">
          <i className="fa-solid fa-circle-user fa-2x"></i>
          <i className="fa-solid fa-sort-down 2x"></i>
      </div>
      <button onClick={ logout }>Log out</button>
    </div>
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