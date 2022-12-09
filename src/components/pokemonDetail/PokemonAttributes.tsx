import { Progress, Text } from "@chakra-ui/react"
import { nameFormatter } from "helpers/nameFormatter"
import { Ability, Stat } from "interfaces/PokemonDetailResp"

interface PokemonAttributesProps {
  weight: number
  height: number
  baseExperience: number
  stats: Stat[]
  abilities: Ability[]
}

export const PokemonAttributes = ({
  weight,
  height,
  baseExperience,
  stats,
  abilities,
}: PokemonAttributesProps) => {
  return (
    <>
      <div className="rounded-lg bg-slate-900 p-3 mt-7 grid grid-cols-2 gap-4">
        <span>Weight:</span>
        <span className="font-bold">{weight / 10} kg</span>
        <span>Height:</span>
        <span className="font-bold">{height / 10} m</span>
        <span>Base experience:</span>
        <span className="font-bold">{baseExperience}</span>
        {stats.map(({ stat, base_stat }) => (
          <>
            <span>{nameFormatter(stat.name)}:</span>
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

      <div className="rounded-lg bg-slate-900 p-3 mt-5 font-bold">
        {abilities
          .map(({ ability }) => nameFormatter(ability.name))
          .join(" / ")}
      </div>
    </>
  )
}
