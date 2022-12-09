import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const AppLayout = () => {
  return (
    <div id="App">
      <Navbar />
      <div className="px-5 lg:px-20 pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
