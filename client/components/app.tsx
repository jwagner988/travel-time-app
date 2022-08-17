import React from "react";
import { Link } from "react-router-dom";
import InputLocations from "./input";
import SimpleMap from "./test";
import Legend from "./legend";


const App = (props) => {
    return (
        <>
        <div id='mainBit'>
            <Legend/>
            <InputLocations/>
            <SimpleMap/>
         </div>
        </>
    )
}


export default App