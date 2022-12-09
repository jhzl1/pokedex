import { PageContainer } from "components/layout/PageContainer"
import { PokemonComparatorItem } from "components/pokemonComparator/PokemonComparatorItem"
import { useAppSelector } from "hooks"

export const PokemonComparatorPage = () => {
  const pokemonsToCompare = useAppSelector(
    (state) => state.pokemonComparator.pokemons
  )

  return (
    <PageContainer>
      <div className="grid grid-cols-5 gap-4">
        {pokemonsToCompare.map((name) => (
          <PokemonComparatorItem key={name} name={name} />
        ))}
      </div>
    </PageContainer>
  )
}
