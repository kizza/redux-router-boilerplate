import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <p>NoMatch</p>
        <Link to="/logout">Log out</Link>
      </div>
    )
  }
}

/*Page.propTypes = {
  appTitle: PropTypes.string.isRequired,
  counters: PropTypes.array.isRequired
}*/