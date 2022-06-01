import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

function Projects() {
    const [projects, setProjects] = useState([])
    const [cars, setCars] = useState([])

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
        setProjects([...projects, data])
    }

    console.log(projects)
    const updateProjectList = () => {
        fetch('http://localhost:9292/projects')
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }

    return (
        <div>
            {projects.map((project) => {
                return <ProjectCard project={project} key={project.id} updateProjectList={updateProjectList} />
            })}
            <ProjectForm handleForm={handleForm} cars={cars} />
        </div>
    )
}

export default Projects