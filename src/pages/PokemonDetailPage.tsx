import { useNavigate, useParams } from "react-router-dom"
import { Button, Skeleton, Text } from "@chakra-ui/react"

import { PageContainer } from "components/layout/PageContainer"
import { PokemonAttributes } from "components/pokemonDetail/PokemonAttributes"
import { PokemonDetailResp } from "interfaces/PokemonDetailResp"
import { PokemonImages } from "components/pokemonDetail/PokemonImages"
import { PokemonMoves } from "components/pokemonDetail"
import { useComparePokemon, useFetch } from "hooks"

export const PokemonDetailPage = () => {
  const { pokeID } = useParams<"pokeID">()

  const { data: pokeData } = useFetch<PokemonDetailResp>({
    endpoint: `/pokemon/${pokeID}/`,
    dependency: pokeID,
  })

  const { addPokemon, checkPokemon } = useComparePokemon()

  const navigate = useNavigate()

  let isPokeOnComparator = false

  if (pokeData) isPokeOnComparator = checkPokemon(pokeData.name)

  const handleComparePokemon = () => {
    if (!isPokeOnComparator) addPokemon(pokeData!?.name)

    navigate("/comparator")
  }

  return pokeData ? (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div>
          <Text fontSize="4xl" color="blue.500" my={3} className="uppercase">
            {pokeData.name}
          </Text>

          <PokemonImages
            altName={pokeData.name}
            bigImage={pokeData.sprites.other!?.dream_world.front_default}
            smallImages={[
              pokeData.sprites.back_default,
              pokeData.sprites.front_default,
              pokeData.sprites.back_shiny,
              pokeData.sprites.front_shiny,
            ]}
          />
        </div>

        <div>
          <Text fontSize="2xl" color="blue.500" my={3} className="uppercase">
            {pokeData.types.map(({ type }) => `${type.name}`)}
          </Text>

          <PokemonAttributes
            abilities={pokeData.abilities}
            baseExperience={pokeData.base_experience}
            height={pokeData.height}
            stats={pokeData.stats}
            weight={pokeData.height}
          />
        </div>

        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <PokemonMoves moves={pokeData.moves} />

          <Button className="w-full" onClick={handleComparePokemon}>
            {isPokeOnComparator ? "Go to comparator" : "Compare"}
          </Button>
        </div>
      </div>
    </PageContainer>
  ) : (
    <Skeleton h={20} my={10} />
  )
}
