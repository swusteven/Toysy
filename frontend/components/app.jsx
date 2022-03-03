import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import HeaderSectionContainer from './header_section/header_section_container';
import SignupContainer from './session/signup_container';
import LoginContainer from "./session/login_container"
import ProductContainer from './product/product_container';
import ProductItem from './product/product_item';
import Footer from './footer.jsx/footer';

const App = () => (
  <>
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={HeaderSectionContainer} /> 
    <Route path="/" component={ProductContainer} />
    <Route path="/" component={ProductContainer} />
    <Route path="/" component={ProductContainer} />

    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/productitem/:id" component={ProductItem} />

    <Route path="/" component={Footer} />
    

  </>
);

export default App