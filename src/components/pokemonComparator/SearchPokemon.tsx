import { SearchIcon } from "assets/icons"
import { PokemonSearcher } from "components/searcher/PokemonSearcher"

export const SearchPokemon = () => {
  return (
    <div className="bg-slate-900 rounded-lg p-4 h-96 flex justify-center items-center mt-[59px]">
      <div className="flex items-center flex-col">
        <SearchIcon />

        <h3 className="my-3">Search pokemon to compare</h3>

        <div>
          <PokemonSearcher />
        </div>
      </div>
    </div>
  )
}
