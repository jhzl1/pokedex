import { createContext, PropsWithChildren } from "react"
import { Card as ChakraCard, CardBody } from "@chakra-ui/react"
import { PokemonWithImage } from "interfaces/PokemonsResps"

type CardProps = PokemonWithImage & PropsWithChildren

export const CardContext = createContext({} as PokemonWithImage)

const { Provider } = CardContext

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <Provider value={{ ...rest }}>
      <ChakraCard>
        <CardBody>{children}</CardBody>
      </ChakraCard>
    </Provider>
  )
}
