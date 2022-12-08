import axios from "axios"

interface FetchArgs {
  endpoint: string
  method: "GET" | "POST" | "DELETE" | "PUT"
  payload?: any
  params?: any
}

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

export const fetchPokeApi = <T>({
  method,
  endpoint,
  params,
  payload,
}: FetchArgs) => {
  return pokeApi.request<T>({
    method,
    url: endpoint,
    data: payload,
    params,
  })
}
