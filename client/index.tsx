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
import App from './components/app'
import AdditionalInfo from './components/additionalInfo'

ReactDOM.render(
    // <Provider store={store}>
        <BrowserRouter>
            <div>this is where the app goes</div>

            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='info' element={<AdditionalInfo />}></Route>
            </Routes>
        </BrowserRouter>,
    // </Provider>,
    document.getElementById('root')
)