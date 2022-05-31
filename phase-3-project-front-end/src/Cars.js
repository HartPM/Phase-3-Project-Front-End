import { useEffect, useState } from 'react'
import CarsCard from './CarsCard'

function Cars() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cars')
            .then(resp => resp.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            {cars.map(car => {
                return <CarsCard car={car} />
            })}
        </div>
    )
}

export default Cars