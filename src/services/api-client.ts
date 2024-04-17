import axios from "axios"

const API_KEY = process.env.REACT_APP_GAMES_API_KEY

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY
  }
})