import React, { useState } from "react";
const axios = require('axios')

const InputLocations = (props) => {

    const [startingLocation, setStartingLocation] = useState('')
    const [destination, setDestination] = useState('')

    const handleClick = (e) => {
        e.preventDefault()

        // const tripInfo = {
        //     start: startingLocation,
        //     destination: destination
        // }

        // console.log('tripInfo', tripInfo)

        const config = {
            method: 'get',
            url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyA_yhEXoK1E3XGOQ0q6qMJdpV-x4pqZka4',
            headers: { }
        }
        //do the fetch

        axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data))
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    return (
        <>
            <div id='mainInput'>
                <h3>Add a new Trip!</h3>
                <p>Starting location</p>
                <input onChange={(e) => setStartingLocation(e.target.value)}></input>
                <p>Destination</p>
                <input onChange={(e) => setDestination(e.target.value)}></input>
                <button onClick={handleClick}>Submit Trip</button>
            </div>
        </>
    )
}

export default InputLocations