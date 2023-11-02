import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../features/auth/authSlice";

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Welcome {user}</p>
      <span className="line">
        <Link to="/usersList">Users List</Link>
      </span>
    </section>
  )
}

export default Dashboard