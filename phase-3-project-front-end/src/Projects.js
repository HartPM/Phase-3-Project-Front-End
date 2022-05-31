import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/projects')
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div>
            {projects.map((project) => {
                return <ProjectCard project={project} />
            })}
        </div>
    )
}

export default Projects