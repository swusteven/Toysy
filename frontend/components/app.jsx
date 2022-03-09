import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import HeaderSectionContainer from './header_section/header_section_container';
import SignupContainer from './session/signup_container';
import LoginContainer from "./session/login_container"
import ProductsContainer from './product/products_container';
import ProductItemContainer from './product/product_item_container';
import Footer from './footer/footer';
import CartContainer from './cart/cart_container';
import CategoriesContainer from './category/categories_container';

import {AuthRoute, ProtectedRoute} from '../utils/auth_util'


const App = () => (
  <>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={HeaderSectionContainer} /> 
    
    <Route exact path="/" component={ProductsContainer} />
    <Route exact path="/category/:category" component={CategoriesContainer} />
    

    <Route path="/login" component={LoginContainer} />
    <Route path="/login" component={HeaderSectionContainer} /> 
    
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/signup" component={HeaderSectionContainer} /> 
    <ProtectedRoute path="/cart" component={CartContainer} /> 

    <Route path="/products/:id" component={ProductItemContainer} />
    


    <Route path="/" component={Footer} />
  </>
);

export default App