import { SearchIcon } from "assets/icons"
import { PokemonSearcher } from "components/searcher/PokemonSearcher"

interface SearchPokemonProps {
  pokemonsLength: number
}

export const SearchPokemon = ({ pokemonsLength }: SearchPokemonProps) => {
  return (
    <div
      className={`bg-slate-900 rounded-lg p-4 h-96 flex justify-center items-center mt-[59px] col-span-${
        pokemonsLength % 2 === 0 ? "2" : "1"
      } lg:col-span-1`}
    >
      <div className="flex items-center flex-col">
        <SearchIcon />

        <h3 className="my-3 text-center">Search pokemon to compare</h3>

        <div>
          <PokemonSearcher />
        </div>
      </div>
    </div>
  )
}
