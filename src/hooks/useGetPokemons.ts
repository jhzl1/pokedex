import { useEffect, useState } from "react"
import { fetchPokeApi } from "api/pokeApi"
import { pokemonFormatter } from "helpers/pokemonFormatter"
import { PokemonsResp, PokemonWithImage } from "interfaces/PokemonsResps"

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonWithImage[]>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await fetchPokeApi<PokemonsResp>({
        endpoint: "/pokemon/",
        params: {
          limit: 20,
          offset,
        },
      })

      setPokemons((prevState) => [
        ...prevState,
        ...pokemonFormatter(data.results, offset),
      ])
    }

    getPokemons()
  }, [offset])

  return { pokemons, setOffset }
}
