import { useState } from 'react'
import ProjectEditForm from './ProjectEditForm'

function ProjectCard({ project, updateProjectList }) {
    const [isEdit, setIsEdit] = useState(false)
    console.log(project.car_id)
    const handleEditClick = () => {
        setIsEdit(isEdit => !isEdit)
    }

    const handleDelete = (e) => {
        fetch(`http://localhost:9292/projects/${project.id}`, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(updateProjectList)
    }

    return (
        <ul>
            <li value={project}>{project.title}</li>
            <button onClick={handleEditClick}>Edit Project</button>
            {isEdit ? <ProjectEditForm project={project} /> : null}
            <button onClick={handleDelete}>Delete Project</button>
        </ul>

    )
}

export default ProjectCard