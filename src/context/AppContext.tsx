import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { store } from "store"

export const AppContext = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}
