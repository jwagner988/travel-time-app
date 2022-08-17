import React from "react";
import { Link } from "react-router-dom";

const Legend = (props) => {



    return (
        <>
            <div id='NavBar'>
                <Link to="trips">Add a Trip</Link>
                <Link to="data">View Data</Link>
                <Link to="info">Learn More</Link>
                <Link to="/">About</Link>

            </div>
        </>
    )
}



// what goes on the legend? Trips, data, learn more, about
export default Legend