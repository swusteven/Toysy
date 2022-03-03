import React from 'react';
import SearchBar from './search_bar';
import AccountManager from './account_manager';
import Cart from './cart';
import { Link } from 'react-router-dom';


const NavBarMain = ({currentUser, logout, setModalToOpen }) =>{
    return (
      <div className="nav-bar-main-inner">
        
        <div className="nav-bar-main-logo">
            <Link to="/">Toysy</Link>
        </div>

        <div className="nav-bar-main-search">
          <SearchBar />
        </div>

        <div className="nav-bar-main-accout-manager">
          <AccountManager currentUser={currentUser}  logout={logout} setModalToOpen={setModalToOpen}/>
        </div>

        <div className="nav-bar-main-cart">
          <Cart currentUser={currentUser} />
        </div>

      </div>
    )
};

export default NavBarMain