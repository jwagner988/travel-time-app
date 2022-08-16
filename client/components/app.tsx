import React from "react";
import { Link } from "react-router-dom";
import InputLocations from "./input";
import SimpleMap from "./test";


const App = (props) => {
    return (
        <>
         <h1>this is the homepage</h1>
         <SimpleMap/>
         <InputLocations/>
         <Link to={'info'}>More Info</Link>
        </>
    )
}


export default App