import { useParams } from "react-router-dom"
import { Button, Image, Progress, Skeleton, Text } from "@chakra-ui/react"
import { PageContainer } from "components/layout/PageContainer"
import { useFetch } from "hooks"
import { PokemonDetailResp } from "interfaces/PokemonDetailResp"
import { statFormatter } from "helpers/statsFormatter"

export const PokemonDetailPage = () => {
  const { pokeID } = useParams<"pokeID">()

  const { data: pokeData } = useFetch<PokemonDetailResp>({
    endpoint: `/pokemon/${pokeID}/`,
  })

  return pokeData ? (
    <PageContainer>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <Text fontSize="4xl" color="blue.500" my={3} className="uppercase">
            {pokeData.name}
          </Text>

          <div>
            <Image
              src={pokeData.sprites.other!?.dream_world.front_default}
              alt={pokeData.name}
              w="full"
              height={380}
              className="bg-neutral-700 rounded-lg shadow-lg"
            />

            <div className="grid grid-cols-4 gap-10 my-4">
              <Image
                src={pokeData.sprites.back_default}
                alt={pokeData.name}
                w="full"
                height={90}
                className="bg-neutral-700 rounded-lg shadow-lg"
              />
              <Image
                src={pokeData.sprites.front_default}
                alt={pokeData.name}
                w="full"
                height={90}
                className="bg-neutral-700 rounded-lg shadow-lg"
              />
              <Image
                src={pokeData.sprites.back_shiny}
                alt={pokeData.name}
                w="full"
                height={90}
                className="bg-neutral-700 rounded-lg shadow-lg"
              />
              <Image
                src={pokeData.sprites.front_shiny}
                alt={pokeData.name}
                w="full"
                height={90}
                className="bg-neutral-700 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <Text fontSize="2xl" color="blue.500" my={3} className="uppercase">
            {pokeData.types.map(({ type }) => `${type.name}`)}
          </Text>

          <div className="rounded-lg bg-neutral-900 p-3 mt-7 grid grid-cols-2 gap-4">
            <span>Weight:</span>
            <span className="font-bold">{pokeData.weight / 10} kg</span>
            <span>Height:</span>
            <span className="font-bold">{pokeData.height / 10} m</span>
            <span>Base experience:</span>
            <span className="font-bold">{pokeData.base_experience}</span>
            {pokeData.stats.map(({ stat, base_stat }) => (
              <>
                <span>{statFormatter(stat.name)}:</span>
                <div className="relative pt-2">
                  <span className="absolute -top-0">{base_stat}</span>
                  <Progress rounded="lg" ml={8} value={base_stat} />
                </div>
              </>
            ))}
          </div>
          <Text fontSize="2xl" color="blue.500" my={3} className="uppercase">
            Abilities
          </Text>

          <div className="rounded-lg bg-neutral-900 p-3 mt-5 font-bold">
            {pokeData.abilities
              .map(({ ability }) => statFormatter(ability.name))
              .join(" / ")}
          </div>
        </div>

        <div>
          <Text fontSize="2xl" color="blue.500" my={3} className="uppercase">
            Moves
          </Text>

          <div className="rounded-lg bg-neutral-900 p-3 mt-7 font-bold grid grid-cols-3 gap-2 mb-5">
            {pokeData.moves.slice(-35).map(({ move }) => (
              <span>- {statFormatter(move.name)}</span>
            ))}
          </div>

          <Button className="text-neutral-700 w-full">Compare</Button>
        </div>
      </div>
    </PageContainer>
  ) : (
    <Skeleton h={20} my={10} />
  )
}
