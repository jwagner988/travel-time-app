import { response } from "express";
import React, { ReactElement, useState } from "react";
const axios = require('axios')

const InputLocations = (props) => {

    const [startingLocation, setStartingLocation] = useState('')
    const [destination, setDestination] = useState('')

    const handleClick = (e) => {
        e.preventDefault()

        const tripInfo = {
            start: startingLocation,
            destination: destination,
            someOtherData: 'I am Data :)'
        }
        console.log('about to fetch', tripInfo)
        fetch('/main/trip', {
            method:'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(tripInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log('data from server', data)
        })
        .catch((err) => {
            console.log('err', err)
        })
    }

    return (
        <>
            <div id='mainInput'>
                <h3>Add a new Trip!</h3>
                <p>Starting location!!!</p>
                <input onChange={(e) => setStartingLocation(e.target.value)}></input>
                <p>Destination</p>
                <input onChange={(e) => setDestination(e.target.value)}></input>
                <button onClick={handleClick}>Submit Trip</button>
            </div>
        </>
    )
}

export default InputLocations