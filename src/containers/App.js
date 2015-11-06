import React, { Component, PropTypes } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
//import Base from '../components/Base'

import * as CounterActions from '../actions/counter'
import * as AppActions from '../actions/app'

class App extends Component {

  render() {

    const { appTitle, counters, dispatch } = this.props

    const allActions = Object.assign({}, CounterActions, AppActions)

    const actions = bindActionCreators(allActions, dispatch);
    //const actions2 = bindActionCreators(CounterActions, dispatch);
    return (
      <div>
        <Page appTitle={appTitle} addNewCounter={actions.addNewCounter} counters={counters} />
        <button onClick={() =>
            /*dispatch(changeTitle('text'))*/
            actions.changeTitle('next')
          }>
          Test</button>
      </div>
    )
  }
}

App.propTypes = {
  //changeTitle: PropTypes.func.isRequired,
  appTitle: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log('state is')
  console.log(state)
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
