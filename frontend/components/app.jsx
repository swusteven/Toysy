import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import HeaderSectionContainer from './header_section/header_section_container';
import SignupContainer from './session/signup_container';
import LoginContainer from "./session/login_container"
import ProductsContainer from './product/products_container';
import ProductItemContainer from './product/product_item_container';
import Footer from './footer/footer';

const App = () => (
  <>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={HeaderSectionContainer} /> 
    
    <Route exact path="/" component={ProductsContainer} />
    <Route exact path="/" component={ProductsContainer} />
    <Route exact path="/" component={ProductsContainer} />
    

    <Route path="/login" component={LoginContainer} />
    <Route path="/login" component={HeaderSectionContainer} /> 
    
    <Route path="/signup" component={SignupContainer} />
    <Route path="/signup" component={HeaderSectionContainer} /> 

    <Route path="/products/:id" component={ProductItemContainer} />

    <Route path="/" component={Footer} />
  </>
);

export default App