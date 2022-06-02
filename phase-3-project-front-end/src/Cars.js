import { useEffect, useState } from 'react'
import CarsCard from './CarsCard'
import CarFrom from './CarForm'

function Cars() {
    const [cars, setCars] = useState([])


    useEffect(() => {
        fetch('http://localhost:9292/cars')
            .then(resp => resp.json())
            .then(data => setCars(data))
    }, [])

    const handleForm = (data) => {
        setCars([...cars, data])
    }

    return (
        <div>
            {cars.map(car => {
                return <CarsCard car={car} />
            })}
            <CarFrom handleForm={handleForm} />
        </div>
    )
}

export default Cars