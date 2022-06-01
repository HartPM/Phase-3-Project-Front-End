import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/projects')
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }, [])

    const handleForm = (data) => {
        setProjects([...projects, data])
    }

    return (
        <div>
            {projects.map((project) => {
                return <ProjectCard project={project} />
            })}
            <ProjectForm handleForm={handleForm} />
        </div>
    )
}

export default Projects