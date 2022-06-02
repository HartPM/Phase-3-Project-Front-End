import { useEffect, useState } from 'react'
import { Hint } from 'react-autocomplete-hint'

function ProjectForm({ handleForm, cars }) {
    const [projectTitle, setProjectTitle] = useState("")
    const [timeRequired, setTimeRequired] = useState(0)
    const [toolsRequired, setToolsRequired] = useState("")
    const [description, setDescription] = useState("")
    const [searchCar, setSearchCar] = useState("")
    const[hintData, setHintData] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cars')
            .then(resp => resp.json())
            .then(cars => setHintData(cars.map(car => car.name)))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        postProject()
    }

    function postProject() {
        fetch('http://localhost:9292/projects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: projectTitle,
                time_required: timeRequired,
                tools_required: toolsRequired,
                description: description,
                search_car: searchCar
            })
        })
            .then(r => r.json())
            .then(data => handleForm(data))

        setProjectTitle("")
        setTimeRequired(0)
        setToolsRequired("")
        setDescription("")
        setSearchCar("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Project Name
                    <input
                        type="text"
                        placeholder="Name your Project"
                        value={projectTitle}
                        onChange={e => setProjectTitle(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    Time Required
                    <input
                        type="text"
                        placeholder="How long will it take..."
                        value={timeRequired}
                        onChange={e => setTimeRequired(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    Tools Required
                    <input
                        type="text"
                        placeholder="What tools will you need..."
                        value={toolsRequired}
                        onChange={e => setToolsRequired(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        placeholder="Summary of project..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    Car Receiving Project
                    <Hint options={hintData} allowTabFill>
                    <input
                        type="text"
                        placeholder="Car's Nickname"
                        value={searchCar}
                        onChange={e => setSearchCar(e.target.value)}
                    >
                    </input>
                    </Hint>
                </label>
                <button>Create Project!</button>
            </form>
        </div>
    )
}

export default ProjectForm