import { Skeleton, Text } from "@chakra-ui/react"
import { PokemonAttributes, PokemonImages } from "components/pokemonDetail"
import { useFetch } from "hooks"
import { PokemonDetailResp } from "interfaces/PokemonDetailResp"

interface PokemonComparatorItemProps {
  name: string
}

export const PokemonComparatorItem = ({ name }: PokemonComparatorItemProps) => {
  const { data: pokeData } = useFetch<PokemonDetailResp>({
    endpoint: `/pokemon/${name}/`,
  })

  return pokeData ? (
    <div>
      <Text fontSize="2xl" color="blue.500" my={3} className="uppercase">
        {name}
      </Text>

      <PokemonImages
        altName={name}
        bigImage={pokeData.sprites.other!?.dream_world.front_default}
        showSmallImages={false}
      />

      <PokemonAttributes
        abilities={pokeData.abilities}
        baseExperience={pokeData.base_experience}
        height={pokeData.height}
        stats={pokeData.stats}
        weight={pokeData.height}
      />
    </div>
  ) : (
    <Skeleton h={20} />
  )
}
