import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Page extends Component {
  render() {
    const { appTitle } = this.props
    return (
      <div>
      The page is here {appTitle}
      <p>
      <Link to="/">Home</Link>
      <Link to="/login">Log in</Link>
      <Link to="/about">About</Link>
      <Link to="/whatever">No match</Link>
      </p>
      {this.props.children}
      </div>
    )
  }
}


import { connect } from 'react-redux'
function mapStateToProps(state) {
  console.log('state is')
  console.log(state)
  return {
    //counter: state.counter,
    counters: state.counters,
    appTitle: state.appTitle
  }
}

export default connect(mapStateToProps)(Page)
