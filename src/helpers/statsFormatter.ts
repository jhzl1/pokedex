import { capitalize } from "lodash"

export const statFormatter = (name: string) => {
  const nameWithoutDashes = name.replace("-", " ")

  return capitalize(nameWithoutDashes)
}
