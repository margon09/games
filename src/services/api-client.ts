import axios from "axios"

export interface FetchResponse<T> {
  count: number
  results: T[]
}

const API_KEY = process.env.REACT_APP_GAMES_API_KEY

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY
  }
})