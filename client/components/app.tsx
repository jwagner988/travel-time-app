import React from "react";
import { Link } from "react-router-dom";
import InputLocations from "./input";


const App = (props) => {
    return (
        <>
         <h1>this is the homepage</h1>
         <InputLocations/>
         <Link to={'info'}>More Info</Link>
        </>
    )
}


export default App