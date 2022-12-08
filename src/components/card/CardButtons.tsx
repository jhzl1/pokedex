import { useContext } from "react"
import { Button } from "@chakra-ui/react"

import { CardContext } from "./Card"

export const CardButtons = () => {
  const { name, id } = useContext(CardContext)

  // console.log({ name, id })

  return (
    <div className="flex justify-between">
      <Button>Compare</Button>
      <Button>View details</Button>
    </div>
  )
}
