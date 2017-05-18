import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'


import * as reducers from './reducers' //with "import * as reducers" we get the reducers as an object with their names as the keys

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)


const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
})) //combineReducers() generates a function that calls your reducers with the slices of state selected according to their keys, and combining their results into a single object again.

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(routingMiddleware),
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export const history = syncHistoryWithStore(baseHistory, store)

export default store
