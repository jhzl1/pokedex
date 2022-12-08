import { PropsWithChildren } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"

import { store } from "store"

export const AppContext = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  )
}
