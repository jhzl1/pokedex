import { Text } from "@chakra-ui/react"
import { nameFormatter } from "helpers/nameFormatter"
import { Move } from "interfaces/PokemonDetailResp"

interface PokemonMovesProps {
  moves: Move[]
}

export const PokemonMoves = ({ moves }: PokemonMovesProps) => {
  return (
    <>
      <Text fontSize="2xl" color="blue.500" my={3} className="uppercase">
        Moves
      </Text>

      <div className="rounded-lg bg-neutral-900 p-3 mt-7 font-bold grid grid-cols-3 gap-2 mb-5">
        {moves.slice(-35).map(({ move }) => (
          <span>- {nameFormatter(move.name)}</span>
        ))}
      </div>
    </>
  )
}
