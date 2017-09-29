import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'


import './styles/index.css'


import App from './components/App'
import BaseLayout from './components/BaseLayout'
import listing from './containers/listing'
import UserDetail from './containers/UserDetail'
import accountInfo from './containers/accountInfo'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users/:id/:accountID" component={accountInfo} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/users" component={listing} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'))
