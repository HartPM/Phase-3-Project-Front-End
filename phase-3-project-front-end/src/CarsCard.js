function CarsCard({ car }) {
    return (
        <div>
            <img src={car.image_url} />
            <p>{car.name}</p>
        </div>
    )
}

export default CarsCard