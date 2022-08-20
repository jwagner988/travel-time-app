import {  applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'


const store = configureStore({
     reducer: reducers,
})

export default store