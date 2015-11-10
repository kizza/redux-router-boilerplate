// import auth from '../utils/auth.js'
// import Login from '../components/Login'


//components/Routes.js
import React from 'react';
import { Route } from 'react-router';


import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import NoMatch from '../components/NoMatch'


export default (
  <Route path="/" component={Home}>
    <Route path="login" component={Login}/>
    <Route path="about" component={About}/>
    <Route path="next/bit" component={Login}>
    <Route path="*" component={NoMatch}/>
  </Route>
  


);




function redirectToLogin(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
  }
}

function redirectToDashboard(nextState, replaceState) {
  console.log(nextState)
  if (auth.loggedIn()) {
    replaceState(null, '/')
  }
}

