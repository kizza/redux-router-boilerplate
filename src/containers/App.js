import React, { Component, PropTypes } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createHistory, useBasename } from 'history'

import Page from '../components/Page'


import { Router, Route, IndexRoute, History } from 'react-router'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import NoMatch from '../components/NoMatch'

require('../index.scss')
import * as CounterActions from '../actions/counter'
import * as AppActions from '../actions/app'

// const history = useBasename(createHistory)({
//   basename: '/app'
// })
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()


class App extends Component {

  render() {

    const { appTitle, counters, dispatch } = this.props
    // const allActions = Object.assign({}, CounterActions, AppActions)
    // const actions = bindActionCreators(allActions, dispatch);
    
    //const actions2 = bindActionCreators(CounterActions, dispatch);
    
         /*             <Route path="users" component={Users}>
              <Route path="/user/:userId" component={User}/>
            </Route>
            <Route path="*" component={NoMatch}/>*/

    return (
 
      <Router history={history}>
        <Route path="/" component={Page}>
          <IndexRoute component={Home}/>
          <Route path="login" component={Login} history={history} />
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    )
  }
}

App.propTypes = {
  //changeTitle: PropTypes.func.isRequired,
  appTitle: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    //counter: state.counter,
    counters: state.counters,
    appTitle: state.appTitle
  }
}
/*
function mapDispatchToProps(dispatch) {
  //dispatch = bindActionCreators(AppActions, dispatch)
  //var allActions = Object.assign({}, CounterActions, AppActions)
  return bindActionCreators(AppActions, dispatch)
}*/

export default connect(mapStateToProps)(App)

//export default connect(mapStateToProps, mapDispatchToProps)(App)
