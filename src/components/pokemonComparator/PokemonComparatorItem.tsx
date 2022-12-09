import { Button, Skeleton, Text } from "@chakra-ui/react"
import { PokemonAttributes, PokemonImages } from "components/pokemonDetail"
import { useComparePokemon, useFetch } from "hooks"
import { PokemonDetailResp } from "interfaces/PokemonDetailResp"

interface PokemonComparatorItemProps {
  name: string
}

export const PokemonComparatorItem = ({ name }: PokemonComparatorItemProps) => {
  const { removePokemon } = useComparePokemon()

  const { data: pokeData } = useFetch<PokemonDetailResp>({
    endpoint: `/pokemon/${name}/`,
  })

  return pokeData ? (
    <div className="mb-4">
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
      <Button
        mt={3}
        w="full"
        className="ab top-0 right-0"
        colorScheme="red"
        size="sm"
        onClick={() => removePokemon(name)}
      >
        Remove {name}
      </Button>
    </div>
  ) : (
    <Skeleton h={20} />
  )
}
