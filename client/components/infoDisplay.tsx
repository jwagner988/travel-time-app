import React, {useEffect, useState} from "react";

const InfoDisplay = (props) => {

const [northAmericaTrips, setNorthAmericaTrips] = useState(0)
const [northAmericaTrain, setNorthAmericaTrain] = useState(0)
const [europeTrips, setEuropeTrips] = useState(0)
const [europeTrain, setEuropeTrain] = useState(0)

    useEffect(() => {
        fetch('main/trip')
        .then(resp => resp.json())
        .then(data => {
            console.log(data, 'data!')
            setNorthAmericaTrips(data.northAmericaTotal)
            setNorthAmericaTrain(data.northAmericaTrain)
            setEuropeTrain(data.europeTrain)
            setEuropeTrips(data.europeTotal)
        })
    }, [])

    const northAmPercent = northAmericaTrain / northAmericaTrips * 100
    const europePercent = europeTrain / europeTrips * 100

    function formatAsPercent(num){
        return `${parseFloat(num).toFixed(2)}%`
    }

    return (
        <div id='tripData'>
        <div id='northAmTrips'>
            <p>Total North American trips: {northAmericaTrips}</p>
            <p>Percentage of North American trips where trains are the fastest mode of transportation: {formatAsPercent(northAmPercent)}</p>
        </div>
        <div id='europeTrips'>
            <p>Total European trips: {europeTrips}</p>
            <p>Percentage of European trips where trains are the fastest mode of transportation: {formatAsPercent(europePercent)}</p>
        </div>
        </div>
    )
}

export default InfoDisplay