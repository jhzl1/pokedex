import { Skeleton } from "@chakra-ui/react"

import { PokeCard } from "components/card"
import { useGetPokemons } from "hooks"

export const HomePage = () => {
  const { pokemons, isLoading } = useGetPokemons()

  if (isLoading) return <Skeleton height="3xl" />

  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemons.map((pokeProps) => (
        <PokeCard key={pokeProps.name} {...pokeProps}>
          <PokeCard.Image />
          <PokeCard.Title />
          <PokeCard.Buttons />
        </PokeCard>
      ))}
    </div>
  )
}
