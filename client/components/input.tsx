import React, { useState } from "react";

const InputLocations = (props) => {

    const [startingLocation, setStartingLocation] = useState('')
    const [destination, setDestination] = useState('')

    const handleClick = (e) => {
        e.preventDefault()

        const tripInfo = {
            start: startingLocation,
            destination: destination
        }

        console.log('tripInfo', tripInfo)
        //do the fetch
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