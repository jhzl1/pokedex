import { Image } from "@chakra-ui/react"
import { useContext } from "react"
import { CardContext } from "./Card"

export const CardImage = () => {
  const { img, name } = useContext(CardContext)

  return (
    <Image
      src={img}
      alt={name}
      w="full"
      height={200}
      className="bg-neutral-700 rounded-lg shadow-lg"
    />
  )
}
