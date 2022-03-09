import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUser)
})

//<AuthRoute path="" component={} />

const Auth = ({ loggedIn, path, component: Component}) =>(
  <Route 
    path={path}
    render={props=>(
      loggedIn ? <Redirect to="/"/> : <component {...props} />
    )}
  />
)

const Protected = ({ loggedIn, path, component: Component}) =>{
  debugger
  return <Route 
    path={path}
    render={props=>(
      loggedIn ? <component {...props}/>: <Redirect to="/signup"/>
    )}
  />
}

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))