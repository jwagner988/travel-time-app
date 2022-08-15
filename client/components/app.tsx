import React from "react";
import { Link } from "react-router-dom";


const App = (props) => {
    return (
        <>
         <h1>this is the homepage</h1>
         <Link to={'info'}>More Info</Link>
        </>
    )
}


export default App