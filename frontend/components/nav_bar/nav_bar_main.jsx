import React from 'react';
import SearchBar from './search_bar';
import AccountManager from './account_manager';
import Cart from './cart';


const NavBarMain = ({currentUser, signup, login, logout }) =>{
    return (
      <div className="nav-bar-main-inner">
        
        <div className="nav-bar-main-logo">
          <div>Toysy</div>       
        </div>

        <div className="nav-bar-main-search">
          <SearchBar />
        </div>

        <div className="nav-bar-main-accout-manager">
          <AccountManager currentUser={currentUser} signup={signup} login={login} logout={logout} />
        </div>

        <div className="nav-bar-main-cart">
          <Cart currentUser={currentUser} signup={signup} login={login} logout={logout} />
        </div>

      </div>
    )
};

export default NavBarMain