import axios from 'axios'

export default axios.create({
  baseURL: 'https://qa-kong.command-api.kw.com'
})
