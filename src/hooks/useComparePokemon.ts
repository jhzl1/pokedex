import { useDispatch } from "react-redux"
import {
  addPokemon as addPokeToRedux,
  deletePokemon,
} from "store/slices/pokemonComparatorSlice"

export const useComparePokemon = () => {
  const dispatch = useDispatch()

  const addPokemon = (name: string) => dispatch(addPokeToRedux(name))

  const removePokemon = (name: string) => dispatch(deletePokemon(name))

  return { addPokemon, removePokemon }
}
