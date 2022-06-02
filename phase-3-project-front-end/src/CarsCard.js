function CarsCard({ car, projects }) {


    //projects.map(project => `${project.title}, `)
    let proj_str = ""
    for (let i = 0; i < projects.length -1; i++) {
        proj_str += `${projects[i].title}, `
    }
    proj_str += ` ${projects[projects.length-1].title}`


    return (
        <div>
            <img src={car.image_url} />
            <p>🚗 {car.name} 🚗: 🔧 {proj_str} 🔧</p>
            
        </div>
    )
}

export default CarsCard