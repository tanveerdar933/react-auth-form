import { useGetUsersQuery } from "../features/users/userApiSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()
  return (
    <>
      {isLoading
        ? (
          <section>
            <h1>Loading...</h1>
          </section >
        )
        : (isSuccess
          ? (
            <section className="users">
              <h1>Users List</h1>
              <ul>
                {users.map((user, i) => {
                  return <li key={i}>{user.username}</li>
                })}
              </ul>
              <Link to="/dashboard">Back to Dashboard</Link>
            </section>
          )
          : (
            <section>
              <p>{JSON.stringify(error)}</p>
            </section>
          )
        )}
    </>
  )
}

export default UsersList;