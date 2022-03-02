import React from 'react'
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import header_section_container from './header_section/header_section_container';
import SignupContainer from './session/signup_container';
import LoginContainer from "./session/login_container"
import ProductContainer from './product/product_container';
import ProductIndexItem from './product/product_index_item';

const App = () => (
  <>
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={header_section_container} /> 
    <Route path="/" component={ProductContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route exact path="/productitem" component={ProductIndexItem} />
  </>
);

export default App