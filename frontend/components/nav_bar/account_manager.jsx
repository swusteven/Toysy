import React from 'react';
import { Link } from 'react-router-dom';

const AccountManager = ({ currentUser, logout, setModalToOpen }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.fname}</p>
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