import { configureStore } from "@reduxjs/toolkit"
import { pokemonComparatorSlice } from "./slices/pokemonComparatorSlice"

export const store = configureStore({
  reducer: {
    pokemonComparator: pokemonComparatorSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
