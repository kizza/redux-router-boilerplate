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
