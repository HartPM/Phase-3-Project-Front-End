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
        <ul className="project-container">
            <li className="project-element" value={project}>{project.title}</li><li className="description">{project.description}</li>
            <div className="button-container">
                <button className="project-button" onClick={handleEditClick}>Edit Project</button>
                {isEdit ? <ProjectEditForm project={project} /> : null}
                <button className="project-button" onClick={handleDelete}>Delete Project</button>
            </div>
        </ul>

    )
}

export default ProjectCard