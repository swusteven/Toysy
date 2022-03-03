import React from 'react'
import NavBarMain from './nav_bar_main'
import NavBarCategories from './nav_bar_categories'

const NavBar = ({currentUser, logout, setModalToOpen }) =>{
    return (
      <section className="nav-bar-wrapper" >
        
        <div className="nav-bar-main">
          <NavBarMain currentUser={currentUser} logout={logout} setModalToOpen={setModalToOpen} />
        </div>

        <div className='nav-bar-categories'>
          <NavBarCategories />
        </div>

      </section>
    )
}

export default NavBar