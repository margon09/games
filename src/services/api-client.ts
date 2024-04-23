import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
  count: number
  next:string | null
  results: T[]
}

const API_KEY = process.env.REACT_APP_GAMES_API_KEY

const axiosInstance =  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default APIClient