import { PokeList } from "interfaces/PokemonsResps"

export const formatPokemonToSearcher = (pokemons: PokeList[]) => {
  return pokemons.map(({ name }) => ({ label: name, value: name }))
}
