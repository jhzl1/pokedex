import { Fade, Input } from "@chakra-ui/react"
import { Select } from "chakra-react-select"
import { useState } from "react"
import { Virtuoso } from "react-virtuoso"

export const PokemonSearcher = () => {
  const [inputValue, setInputValue] = useState("")

  const countries = [
    "nigeria",
    "japan",
    "india",
    "united states",
    "south korea",
  ]

  return (
    <div className="w-56">
      <Select
        placeholder="Search pokemon"
        options={[
          {
            label: "I am red",
            value: "i-am-red",
          },
          {
            label: "I fallback to purple",
            value: "i-am-purple",
          },
        ]}
        size="sm"
        className="!w-full"
        colorScheme="blackAlpha"
        useBasicStyles
      />
    </div>
  )
}
