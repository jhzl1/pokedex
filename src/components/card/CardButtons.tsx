import { useContext } from "react"
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { addPokemon } from "store/slices/pokemonComparatorSlice"
import { CardContext } from "./Card"
import { useComparePokemon } from "hooks"

export const CardButtons = () => {
  const { name, id } = useContext(CardContext)

  const { checkPokemon } = useComparePokemon()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isPokeOnComparator = checkPokemon(name)

  const handleCompare = () => {
    if (!isPokeOnComparator) dispatch(addPokemon(name))

    navigate("/comparator")
  }

  return (
    <div className="flex justify-between">
      <Button onClick={handleCompare}>
        {isPokeOnComparator ? "See in the comparator" : "Compare"}
      </Button>
      <Button onClick={() => navigate(`/${id}`)} colorScheme="blue">
        See details
      </Button>
    </div>
  )
}
