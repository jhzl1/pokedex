import { PropsWithChildren } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"

import { store } from "store"

import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "dark",
}

const theme = extendTheme({ config })

export const AppContext = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Provider>
  )
}
