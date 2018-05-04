import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Containers/App'
import registerServiceWorker from './registerServiceWorker'
import store from './Containers/TodoStore'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
