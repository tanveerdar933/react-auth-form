import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <main className="app">
      <Outlet />
    </main>
  )
}

export default Root