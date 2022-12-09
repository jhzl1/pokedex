import { FormControl, FormLabel } from "@chakra-ui/react"
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete"

export const PokemonSearcher = () => {
  const countries = [
    "nigeria",
    "japan",
    "india",
    "united states",
    "south korea",
  ]

  return (
    <FormControl w="60">
      <FormLabel>Olympics Soccer Winner</FormLabel>
      <AutoComplete openOnFocus>
        <AutoCompleteInput variant="filled" />
        <AutoCompleteList>
          {countries.map((country, cid) => (
            <AutoCompleteItem
              key={`option-${cid}`}
              value={country}
              textTransform="capitalize"
            >
              {country}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </FormControl>
  )
}
