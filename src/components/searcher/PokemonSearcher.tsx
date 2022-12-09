import { useState } from "react"
import { Select } from "chakra-react-select"
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { formatPokemonToSearcher } from "helpers/formatPokemonToSearcher"
import { useComparePokemon, useFetch } from "hooks"
import { PokemonsResp } from "interfaces/PokemonsResps"
import { SearchIcon } from "assets/icons"

type Option = {
  label: string
  value: string
}

interface PokemonSearcherProps {
  isSearchFromNavbar?: boolean
}

const initialInputState = { label: "", value: "" }

const DropdownIndicator = () => <SearchIcon className="w-5 mx-2" />

export const PokemonSearcher = ({
  isSearchFromNavbar = false,
}: PokemonSearcherProps) => {
  const { addPokemon, checkPokemon } = useComparePokemon()

  const toast = useToast()

  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState<Option>(initialInputState)

  const { data } = useFetch<PokemonsResp>({
    endpoint: "/pokemon/",
    params: {
      limit: 151,
    },
  })

  let options: Option[] = []

  if (data) options = formatPokemonToSearcher(data.results)

  const handleSelectPokemon = (pokemonSelected: Option) => {
    setInputValue(initialInputState)
    if (isSearchFromNavbar) return navigate(`/${pokemonSelected.value}`)

    const isPokeOnComparator = checkPokemon(pokemonSelected.value)

    if (isPokeOnComparator)
      return toast({
        title: `The pokemon ${pokemonSelected.value} has been added to comparator. Select other`,
      })

    addPokemon(pokemonSelected.value)
  }

  return (
    <div
      className={`  ${
        isSearchFromNavbar ? "w-40 md:w-56" : "w-56"
      } flex justify-center items-center`}
    >
      <Select
        options={options}
        components={{ DropdownIndicator }}
        size="sm"
        className="!w-full"
        colorScheme="blackAlpha"
        placeholder="ddjd"
        useBasicStyles
        value={inputValue}
        onChange={(valueSelected) =>
          handleSelectPokemon(valueSelected as Option)
        }
      />
    </div>
  )
}
