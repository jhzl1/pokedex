import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { App } from "../App"

describe("test at app", () => {
  test("should render the app", () => {
    render(<App />)
  })
})
