import logo from "assets/img/logo.png"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="bg-neutral-900 px-20 py-4 flex flex-row justify-between items-center h-20 sticky top-0 z-20">
      <Link to="/">
        <img src={logo} className="w-44" alt="POKEDEX" />
      </Link>

      <div>buscador</div>
    </div>
  )
}
