import React from 'react'
import { connect } from 'react-redux'
import {signup, login, logout} from "../../actions/session"
import NavBar from "./nav_bar"

const mSTP = state =>({
  current_user: state.session.currentUser
});

const mDTP = dispatch => ({
  signup: (user)=> dispatch(signup(user)),
  login: (user)=> dispatch(login(user)),
  logout: () => dispatch=(logout())
})


export default connect(mSTP, mDTP)(NavBar)