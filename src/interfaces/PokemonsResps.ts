export interface PokemonsResp {
  count: number
  next: string
  previous: string
  results: PokeList[]
}

export interface PokeList {
  name: string
  url: string
}

export interface PokemonWithImage {
  name: string
  img: string
  id: number
}
