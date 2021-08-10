import { LogInProps } from '~/interfaces/loginInterface'

export default {
  logIn: async ({ username, password }: LogInProps) => {
    const res = await fetch('https://qa-kong.command-api.kw.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    return res
  }
}
