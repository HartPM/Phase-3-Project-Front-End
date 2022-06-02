import { useState } from 'react'

function ProjectEditForm({ project }) {
    const [projectTitle, setProjectTitle] = useState(project.title)
    const [timeRequired, setTimeRequired] = useState(project.time_required)
    const [toolsRequired, setToolsRequired] = useState(project.tools_required)
    const [description, setDescription] = useState(project.description)

    function handleSubmit(e) {
        e.preventDefault()

        const projectObject =
        {
            title: projectTitle,
            time_required: timeRequired,
            tools_required: toolsRequired,
            description: description
        }

        fetch(`http://localhost:9292/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(
                projectObject
            ),
        })
            .then(r => r.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="edit-form">
                <label>
                    Project Name
                    <input
                        className="form-inputs"
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
                        className="form-inputs"
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
                        className="form-inputs"
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
                        className="form-inputs"
                        type="text"
                        placeholder="Summary of project..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </input>
                </label>
                <button className="form-button">Update Project!</button>
            </form>
        </div>
    )
}

export default ProjectEditForm