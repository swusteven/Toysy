import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root"
import * as sessionActions from "./actions/session"



document.addEventListener("DOMContentLoaded", function(){
  const root = document.querySelector("#root");
     
  let preloadedState = undefined;
  if (window.currentUser){  
    preloadedState = {
      session: {
        currentUser: window.currentUser,
        cartId: window.currentUser.cart_id
      }
    };
  }

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store ={store}/>, root)

})


