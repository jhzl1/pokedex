import { useDispatch } from "react-redux"
import {
  addPokemon as addPokeToRedux,
  deletePokemon,
} from "store/slices/pokemonComparatorSlice"
import { useAppSelector } from "./useAppSelector"

export const useComparePokemon = () => {
  const pokemonsToCompare = useAppSelector(
    (state) => state.pokemonComparator.pokemons
  )

  const dispatch = useDispatch()

  const addPokemon = (name: string) => dispatch(addPokeToRedux(name))

  const removePokemon = (name: string) => dispatch(deletePokemon(name))

  const checkPokemon = (name: string) => {
    if (pokemonsToCompare.length === 0) return false

    return pokemonsToCompare.includes(name)
  }

  return { addPokemon, removePokemon, checkPokemon }
}
