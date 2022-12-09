import { useContext } from "react"
import { Button } from "@chakra-ui/react"

import { CardContext } from "./Card"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addPokemon } from "store/slices/pokemonComparatorSlice"

export const CardButtons = () => {
  const { name, id } = useContext(CardContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCompare = () => {
    dispatch(addPokemon(name))
    navigate("/comparator")
  }

  return (
    <div className="flex justify-between">
      <Button onClick={handleCompare}>Compare</Button>
      <Button onClick={() => navigate(`/${id}`)} colorScheme="blue">
        View details
      </Button>
    </div>
  )
}
