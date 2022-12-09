import { capitalize } from "lodash"

export const nameFormatter = (name: string) => {
  const nameWithoutDashes = name.replace("-", " ")

  return capitalize(nameWithoutDashes)
}
