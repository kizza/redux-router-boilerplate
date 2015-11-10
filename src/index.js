import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { renderDevTools } from './store/devTools';
import configureStore from './store/configureStore'

const store = configureStore()
render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    {renderDevTools(store)}
  </div>,
  document.getElementById('react')
)


/*
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, History, IndexRoute } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NoMatch from './components/NoMatch'
import { createHistory, useBasename } from 'history'
const history = useBasename(createHistory)({
  basename: '/app'
})

import routes from './config/routes'
render(
    <Router history={history} routes={routes} />,
  document.getElementById('react')
)
*/
