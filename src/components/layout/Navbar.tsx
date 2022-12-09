import { Link, NavLink } from "react-router-dom"

import logo from "assets/img/logo.png"
import { PokemonSearcher } from "components/searcher/PokemonSearcher"
import { useAppSelector } from "hooks"

export const Navbar = () => {
  const pokemonsToCompare = useAppSelector(
    (state) => state.pokemonComparator.pokemons
  )

  return (
    <div className="bg-slate-900 px-20 py-4 flex flex-row justify-between items-center h-20 sticky top-0 z-20 w-full shadow-lg">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <img src={logo} className="w-44" alt="POKEDEX" />
      </Link>
      <div className="flex space-x-4 items-center">
        <NavLink
          to="/comparator"
          className={({ isActive }) =>
            `font-bold underline underline-offset-2 decoration-${
              isActive ? "purple" : "blue"
            }-700 hover:underline-offset-4`
          }
        >
          Comparator{" "}
          {pokemonsToCompare.length > 0 && `(${pokemonsToCompare.length})`}
        </NavLink>
        <PokemonSearcher />
      </div>
    </div>
  )
}
