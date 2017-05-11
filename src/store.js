import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import * as reducers from './reducers' //with "import * as reducers" we get the reducers as an object with their names as the keys 
const reducer = combineReducers({ ...reducers }) //combineReducers() generates a function that calls your reducers with the slices of state selected according to their keys, and combining their results into a single object again.
const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store
