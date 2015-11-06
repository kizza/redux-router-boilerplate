import { combineReducers } from 'redux'
//import counters from './counter'

import { counters, counter } from "./counter";

import appTitle from './app'
//import routerStateReducer from 'redux-router';

const rootReducer = combineReducers({
  counters,
  counter,
  appTitle
})

export default rootReducer
