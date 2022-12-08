import { PokeList, PokemonWithImage } from "interfaces/PokemonsResps"

export const pokemonFormatter = (
  pokeList: PokeList[],
  offset: number
): PokemonWithImage[] => {
  const newPokeList: PokemonWithImage[] = pokeList.map(({ name }, i) => {
    const pokeId = i + 1 + offset

    return {
      name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
      id: pokeId as never,
    }
  })

  return newPokeList
}
