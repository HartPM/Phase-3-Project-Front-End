import { useState } from 'react'

function CarForm({ handleForm }) {
    const [name, setName] = useState("")
    const [year, setYear] = useState(0)
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:9292/cars', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                year: year,
                make: make,
                model: model,
                image_url: image
            })
        })
            .then(r => r.json())
            .then(data => handleForm(data))

        setName("")
        setYear(0)
        setMake("")
        setModel("")
        setImage("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nickname
                    <input
                        type="text"
                        placeholder='Name your ride'
                        value={name}
                        onChange={e => setName(e.target.value)}>
                    </input>
                </label>
                <label>
                    Year
                    <input
                        type="text"
                        placeholder='When was your car built'
                        value={year}
                        onChange={e => setYear(e.target.value)}>
                    </input>
                </label>
                <label>
                    Make
                    <input
                        type="text"
                        placeholder='What are you driving???'
                        value={make}
                        onChange={e => setMake(e.target.value)}>
                    </input>
                </label>
                <label>
                    Model
                    <input
                        type="text"
                        placeholder='This is different than the make...'
                        value={model}
                        onChange={e => setModel(e.target.value)}>
                    </input>
                </label>
                <label>
                    Photo
                    <input
                        type="text"
                        placeholder='show off your whip'
                        value={image}
                        onChange={e => setImage(e.target.value)}>
                    </input>
                </label>
                <button>Add to your Garage</button>
            </form>
        </div>
    )
}

export default CarForm