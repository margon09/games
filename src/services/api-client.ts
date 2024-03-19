import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9584d3ca861b4e9f84eb5cc295ab4b39'
  }
})