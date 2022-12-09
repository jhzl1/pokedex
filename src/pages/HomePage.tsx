import { Skeleton } from "@chakra-ui/react"
import { VirtuosoGrid } from "react-virtuoso"

import { PokeCard } from "components/card"
import { useGetPokemons } from "hooks"

export const HomePage = () => {
  const { pokemons, isLoading, loadMore } = useGetPokemons()

  if (isLoading) return <Skeleton height="3xl" />

  return (
    <>
      <VirtuosoGrid
        useWindowScroll
        data={pokemons}
        endReached={loadMore}
        listClassName="grid grid-cols-4 gap-4"
        itemContent={(_, pokeProps) => (
          <PokeCard {...pokeProps}>
            <PokeCard.Image />
            <PokeCard.Title />
            <PokeCard.Buttons />
          </PokeCard>
        )}
      />
    </>
  )
}
