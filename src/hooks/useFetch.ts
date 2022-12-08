import { useEffect, useState } from "react"

import { fetchPokeApi } from "api/pokeApi"
import axios from "axios"

type UseFetchArgs = {
  endpoint: string
  params?: any
}

export const useFetch = <T>({ endpoint, params }: UseFetchArgs) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    const getData = async () => {
      const { signal } = controller

      setIsLoading(true)

      try {
        const { data } = await fetchPokeApi<T>({
          endpoint,
          params,
          signal,
        })

        setData(data)
      } catch (e) {
        if (axios.isAxiosError(e)) setError("An error has occurred")
      }

      setIsLoading(false)
    }

    getData()

    return () => {
      controller.abort()
    }
  }, [])

  return { isLoading, data, error }
}
