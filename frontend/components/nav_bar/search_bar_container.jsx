import React from 'react'
import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchAllProducts } from "../../actions/product"; 
import { receieveSearchRequest } from "../../actions/search";
import { Redirect, Route, withRouter } from 'react-router-dom'


const mSTP = state => {
  return{
    products: state.products
  }
}

const mDTP = dispatch =>{
  return {
    fetchAllProducts: ()=> dispatch(fetchAllProducts()),
    receieveSearchRequest: (value) => dispatch(receieveSearchRequest(value))
  }
}

export default withRouter(connect(mSTP, mDTP)(SearchBar))
