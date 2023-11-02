import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section>
      <h1>React Auth App</h1>
      <p>simulation for role based authentication and authorization</p>
      <span className="line">
        <Link to="/login">Login</Link>
      </span>
      <span className="line">
        <Link to="/register">Register</Link>
      </span>
    </section>
  )
}

export default Index