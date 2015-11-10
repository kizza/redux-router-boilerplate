import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
  render() {
    return (
      <div>
      <p>This is the ABOUT page</p>
      <Link to="/home">Log out</Link>
      </div>
    )
  }
}

/*Page.propTypes = {
  appTitle: PropTypes.string.isRequired,
  counters: PropTypes.array.isRequired
}*/