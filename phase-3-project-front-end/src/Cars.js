import { useEffect, useState } from 'react'
import CarsCard from './CarsCard'
import CarFrom from './CarForm'

function Cars() {
    const [cars, setCars] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/projects')
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }, [])


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
                return <CarsCard car={car} projects={projects.filter(project => project.car_id === car.id)} />
            })}
            <CarFrom handleForm={handleForm} />
        </div>
    )
}

export default Cars