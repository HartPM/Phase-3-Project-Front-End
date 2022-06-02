function CarsCard({ car, projects }) {


    //projects.map(project => `${project.title}, `)
    let proj_str = ""
    if (projects.length === 0) {
        proj_str = "Head to the Projects page to start a new project for your car"
    } else {
        for (let i = 0; i < projects.length - 1; i++) {
            proj_str += `${projects[i].title}, `
        }
        proj_str += ` ${projects[projects.length - 1].title}`
    }

    return (
        <div>
            <img src={car.image_url} />
            <p>🚗 {car.name} 🚗: 🔧 {proj_str} 🔧</p>
        </div>
    )
}

export default CarsCard