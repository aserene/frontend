import { useLoaderData } from "react-router-dom"

function About(props) {

  const about = useLoaderData()

  return <div className="container">
      <div className="card">
      <h2>Hi! I'm {about.name}</h2>
      <h3>Email me @ {about.email}</h3>
      <p>About Me - {about.bio}</p>
      </div>
    </div>
}

export default About