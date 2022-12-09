import ReactDOM from "react-dom/client"
import { App } from "./App"
import { AppContext } from "context/AppContext"
import "./assets/css/index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContext>
    <App />
  </AppContext>
)
