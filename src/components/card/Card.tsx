import { Card as ChakraCard, CardBody } from "@chakra-ui/react"

export const Card = () => {
  return (
    <ChakraCard>
      <CardBody>
        <span className="text-white">
          View a summary of all your customers over the last month.
        </span>
      </CardBody>
    </ChakraCard>
  )
}
