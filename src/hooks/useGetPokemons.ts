import { pokemonFormatter } from "helpers/pokemonFormatter"
import { PokemonsResp, PokemonWithImage } from "interfaces/PokemonsResps"
import { useCallback, useEffect, useState } from "react"
import { useFetch } from "./useFetch"

export const useGetPokemons = () => {
  const [offset, setOffset] = useState(0)

  const { data, isLoading } = useFetch<PokemonsResp>({
    endpoint: "/pokemon/",
    params: {
      limit: 40,
      offset,
    },
    dependency: offset,
  })

  const [pokemons, setPokemons] = useState<PokemonWithImage[]>([])

  const loadMore = useCallback(() => {
    return setTimeout(() => setOffset(offset + 20), 200)
  }, [setOffset])

  useEffect(() => {
    if (data)
      setPokemons([...pokemons, ...pokemonFormatter(data.results, offset)])
  }, [data])

  return { pokemons, isLoading, loadMore }
}
