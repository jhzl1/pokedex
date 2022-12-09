import { Spinner } from "@chakra-ui/react"
import { VirtuosoGrid } from "react-virtuoso"

import { PokeCard } from "components/card"
import { useGetPokemons } from "hooks"

const Footer = () => (
  <div className="m-4 flex justify-center">
    <Spinner mx={3} /> Loading...
  </div>
)

export const HomePage = () => {
  const { pokemons, setOffset } = useGetPokemons()

  return (
    <VirtuosoGrid
      useWindowScroll
      data={pokemons}
      endReached={() => setOffset((prevOffset) => prevOffset + 20)}
      listClassName="grid grid-cols-4 gap-4"
      itemContent={(_, pokeProps) => (
        <PokeCard {...pokeProps}>
          <PokeCard.Image />
          <PokeCard.Title />
          <PokeCard.Buttons />
        </PokeCard>
      )}
      components={{ Footer }}
    />
  )
}
