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


    return (
        <>
        <p>here be the info</p>
        </>
    )
}

export default InfoDisplay