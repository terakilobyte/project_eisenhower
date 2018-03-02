import 'sharedStyles/theme.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { isProd } from 'helpers/utils'
import * as reducers from 'redux/modules'
import getRoutes from 'config/routes'

import createSagaMiddleware from 'redux-saga'
import Sagas from 'redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(Sagas)

ReactDOM.render(<Provider store={store}>{getRoutes(store)}</Provider>, document.getElementById('app'))
