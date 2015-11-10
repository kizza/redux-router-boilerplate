import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>This is the home page</p>
        
        {this.props.children}
      </div>
    )
  }
}

/*Page.propTypes = {
  appTitle: PropTypes.string.isRequired,
  counters: PropTypes.array.isRequired
}*/