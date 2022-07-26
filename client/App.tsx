import React from 'react'
import ReactDOM from 'react-dom'
// import store from './store'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from 'react-router-dom'

ReactDOM.render(
    // <Provider store={store}>
        <BrowserRouter>
            <div>this is where the app goes</div>
        </BrowserRouter>,
    // </Provider>,
    document.getElementById('root')
)