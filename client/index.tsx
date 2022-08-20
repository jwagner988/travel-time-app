import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from 'react-router-dom'
import App from './components/app'
import AdditionalInfo from './components/additionalInfo'
import { Loader } from "@googlemaps/js-api-loader"
import './styles.scss'




ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='info' element={<AdditionalInfo />}></Route>
                {/* <Route path="trips" element={}></Route>
                <Route path="data" element={}></Route> */}
            </Routes>
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
)