import { createBrowserRouter } from "react-router-dom"
import { HomePage, PokemonComparatorPage, PokemonDetailPage } from "pages"
import { AppLayout } from "components/layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage />, index: true },
      { path: "/:pokeID", element: <PokemonDetailPage /> },
      { path: "/comparator", element: <PokemonComparatorPage /> },
    ],
  },
])
