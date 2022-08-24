import React from "react";
import { Link } from "react-router-dom";
import InputLocations from "./input";
import SimpleMap from "./map";
import Legend from "./legend";
import InfoDisplay from "./infoDisplay";


const App = (props) => {
    return (
        <>
        <div id='mainBit'>
            <InputLocations/>
            <SimpleMap/>
            <InfoDisplay/>
         </div>
        </>
    )
}


export default App