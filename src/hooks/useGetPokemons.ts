import { pokemonFormatter } from "helpers/pokemonFormatter"
import { PokemonsResp, PokemonWithImage } from "interfaces/PokemonsResps"
import { useFetch } from "./useFetch"

export const useGetPokemons = () => {
  const { data, isLoading } = useFetch<PokemonsResp>({
    endpoint: "/pokemon/",
    params: {
      limit: 20,
      offset: 20,
    },
  })

  let pokemons: PokemonWithImage[] = []

  if (data) pokemons = pokemonFormatter(data.results, 0)

  return { pokemons, isLoading }
}
