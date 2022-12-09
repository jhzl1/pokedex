import logo from "assets/img/logo.png"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="bg-neutral-900 px-20 py-4 flex flex-row justify-between items-center h-20 sticky top-0 z-20 w-full shadow-lg">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <img src={logo} className="w-44" alt="POKEDEX" />
      </Link>

      <div>buscador</div>
    </div>
  )
}
