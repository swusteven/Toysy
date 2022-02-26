import React from 'react'
import NavBarMain from './nav_bar_main'
import NavBarCategories from './nav_bar_categories'

//props has currentUser, signup, login and logout
const NavBar = ({currentUser, signup, login, logout }) =>{
    return (
      <div className="nav-bar-wrapper" >
        
        <div className="nav-bar-main">
          <NavBarMain currentUser={currentUser} signup={signup} login={login} logout={logout} />
        </div>

        <div className='nav-bar-categories'>
          <NavBarCategories />
        </div>

      </div>
    )
}

export default NavBar