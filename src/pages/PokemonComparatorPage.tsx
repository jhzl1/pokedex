import { useDispatch } from "react-redux"

import { PageContainer } from "components/layout/PageContainer"
import { PokemonComparatorItem } from "components/pokemonComparator/PokemonComparatorItem"
import { resetState } from "store/slices/pokemonComparatorSlice"
import { SearchPokemon } from "components/pokemonComparator/SearchPokemon"
import { TrashIcon } from "assets/icons"
import { useAppSelector } from "hooks"

export const PokemonComparatorPage = () => {
  const dispatch = useDispatch()

  const pokemonsToCompare = useAppSelector(
    (state) => state.pokemonComparator.pokemons
  )

  const handleDeleteAll = () => dispatch(resetState())

  return (
    <PageContainer>
      <button
        className="absolute top-4 right-0 h-8 w-8 bg-red-500 rounded-full flex justify-center items-center"
        onClick={handleDeleteAll}
      >
        <TrashIcon />
      </button>
      <div className="grid grid-cols-4 gap-4">
        {pokemonsToCompare.map((name) => (
          <PokemonComparatorItem key={name} name={name} />
        ))}
        {pokemonsToCompare.length < 4 && <SearchPokemon />}
      </div>
    </PageContainer>
  )
}
