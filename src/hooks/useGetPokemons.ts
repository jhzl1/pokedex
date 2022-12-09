import { useEffect, useState } from "react"
import { fetchPokeApi } from "api/pokeApi"
import { pokemonFormatter } from "helpers/pokemonFormatter"
import { PokemonsResp, PokemonWithImage } from "interfaces/PokemonsResps"

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonWithImage[]>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const getPokemons = async () => {
      const { signal } = controller

      const { data } = await fetchPokeApi<PokemonsResp>({
        endpoint: "/pokemon/",
        params: {
          limit: 20,
          offset,
        },
        signal,
      })

      setPokemons((prevState) => [
        ...prevState,
        ...pokemonFormatter(data.results, offset),
      ])
    }

    getPokemons()

    return () => {
      controller.abort()
    }
  }, [offset])

  return { pokemons, setOffset }
}
