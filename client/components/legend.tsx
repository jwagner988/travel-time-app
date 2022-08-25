import React from "react";
import { Link, useLocation } from "react-router-dom";

const Legend = (props) => {


const location = useLocation()
console.log(location)

    return (
        <>
            <div id='NavBar'>
                <Link to='/'>Home</Link>
                <Link to="about">About</Link>
                <Link to="data">View Data</Link>
                <Link to="info">Learn More</Link>

            </div>
        </>
    )
}



// what goes on the legend? Trips, data, learn more, about
export default Legend