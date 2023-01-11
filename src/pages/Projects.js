import { useLoaderData } from "react-router-dom"

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div className="container">
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name}/>
        <br/>
        <a href={project.git}>
          <button className="git">View in Github</button>
        </a>
        <a href={project.live}>
          <button className="view">View Live Site</button>
        </a>
      </div>
    ));
}

export default Projects