import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import * as AppActions from '../../actions/app'
import { bindActionCreators } from 'redux'
import auth from '../../utils/auth'

class Login extends Component {
  //mixins: [ History ]
  handleSubmit(e) {
    e.preventDefault();
    //this.context.history.transitionTo('test');

    var email = this.refs.email.value;
    var pass = this.refs.pass.value;
    console.log('logging in')
    var callback = (loggedIn) => {
      // if (!loggedIn)
      //   return this.setState({ error: true })

      const { location } = this.props
      console.log(location)
      console.log(loggedIn)
      // this.history.pushState(null, 'test');
      // return;
      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/')
      }
    }
    auth.login(email, pass, callback.bind(this))
  }
  render() {
    const { appTitle, dispatch } = this.props
    const actions = bindActionCreators(AppActions, dispatch);
    return (
      <div>
        <p>This is the login page {appTitle}</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="email" type="text" />
          <input ref="pass" type="password" />
          <button type="submit">Login</button>
        </form>
        <Link to="/logout">Log out</Link>
        <button onClick={()=>actions.changeTitle('New one')}>Button</button>
      </div>
    )
  }
}

Login.contextTypes = { history: PropTypes.history }


import { connect } from 'react-redux'
function mapStateToProps(state) {
  return {
    appTitle: state.appTitle
  }
}

export default connect(mapStateToProps)(Login)

/*Page.propTypes = {
  appTitle: PropTypes.string.isRequired,
  counters: PropTypes.array.isRequired
}*/