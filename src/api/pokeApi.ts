import axios from "axios"

interface FetchArgs {
  endpoint: string
  params?: any
  signal?: AbortSignal
}

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

export const fetchPokeApi = <T>({ endpoint, params, signal }: FetchArgs) => {
  return pokeApi.request<T>({
    method: "GET",
    url: endpoint,
    params,
    signal,
  })
}
