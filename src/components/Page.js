import React, { Component, PropTypes } from 'react'

export default class Page extends Component {
  render() {
    const { appTitle, counters, addNewCounter } = this.props
    console.log(counters)
    //
    return (
      <div>
      The page is here {appTitle}
      <ol>
        {counters.map(function(result) {
          return <li key={result.id}>{result.label}</li>;
        })}
      </ol>
      <button onClick={()=>addNewCounter('test')}>Label</button>
      </div>
    )
  }
}

Page.propTypes = {
  appTitle: PropTypes.string.isRequired,
  counters: PropTypes.array.isRequired
}