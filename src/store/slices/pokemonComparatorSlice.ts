import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PokemonComparatorSlice {
  pokemons: string[]
}

const initialState: PokemonComparatorSlice = {
  pokemons: [],
}

export const pokemonComparatorSlice = createSlice({
  name: "pokemonComparator",
  initialState,
  reducers: {
    resetState: () => initialState,
    addPokemon: (state, action: PayloadAction<string>) => {
      state.pokemons.push(action.payload)
    },

    deletePokemon: (state, action: PayloadAction<string>) => {
      state.pokemons = state.pokemons.filter(
        (product) => product !== action.payload
      )
    },
  },
})

export const { addPokemon, deletePokemon, resetState } =
  pokemonComparatorSlice.actions
