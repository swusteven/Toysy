import React from 'react'
import NavBarMain from './nav_bar_main'
import NavBarCategories from './nav_bar_categories'

//props has currentUser, signup, login and logout
class NavBar extends React.Component{
  // constructor(props){
  //   super(props)
  // }

  // componentDidMount(){
  //   const ollie = {'fname': "Ollie", "email": "ollie@yahoo.com", "password": "123456"}
  //   debugger
  //   this.props.signup(ollie)
  // }

  render(){
    const {currentUser, signup, login, logout} = this.props

    return (
      <div clasName="nav-bar-wrapper" >
        
        <div className="nav-bar-main">
          <NavBarMain currentUser={currentUser} signup={signup} login={login} logout={logout} />
        </div>

        <div className='nav-bar-categories'>
          <NavBarCategories />
        </div>

      </div>
    )
  }
}

export default NavBar