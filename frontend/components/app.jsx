import React from 'react'
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import HeaderSection from './header_section/header_section';
import SignupContainer from './session/signup_container';
import LoginContainer from "./session/login_container"


export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={HeaderSection} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);
