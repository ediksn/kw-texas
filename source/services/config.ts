import axios from 'axios'

export default {
  initialize: () =>
    axios.create({
      baseURL: 'https://qa-kong.command-api.kw.com'
    })
}
