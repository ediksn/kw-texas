import axios from 'axios'

interface LogInProps {
  username: string
  password: string
}

export default {
  logIn: ({ username, password }: LogInProps) =>
    axios.post('/login', {
      username,
      password
    })
}
