import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Welcome {user}</p>
      <span className="line">
        <Link to="/usersList">Users List</Link>
      </span>
      <div>
        <button type="button">Logout</button>
      </div>
    </section>
  )
}

export default Dashboard