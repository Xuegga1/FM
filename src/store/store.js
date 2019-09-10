import {createStore,applyMiddleware} from 'redux'
import countRouter from './reducer/reducer.js'
import thunk from 'redux-thunk'

var store =createStore(countRouter,applyMiddleware(thunk))
export default store