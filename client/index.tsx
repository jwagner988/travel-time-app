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
import AboutPage from './components/aboutPage'
import AdditionalInfo from './components/additionalInfo'
import AdditionalData from './components/additionalData'
import { Loader } from "@googlemaps/js-api-loader"
import './styles.scss'
import Legend from './components/legend'




ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <Legend/>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='info' element={<AdditionalInfo />}></Route>
                <Route path='about' element={<AboutPage />}></Route>
                <Route path="data" element={<AdditionalData />}></Route>
            </Routes>
        </BrowserRouter>
     </Provider>,
    document.getElementById('root')
)