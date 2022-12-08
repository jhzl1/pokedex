import { Text } from "@chakra-ui/react"
import { useContext } from "react"
import { CardContext } from "./Card"

export const CardTitle = () => {
  const { name } = useContext(CardContext)
  return (
    <Text fontSize="3xl" color="blue.500" my={3} className="uppercase">
      {name}
    </Text>
  )
}
