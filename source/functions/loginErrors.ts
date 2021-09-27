export const loginErrors = (error: string | null) => {
  switch (error) {
    case 'invalid_request': {
      return 'Username or password are invalid'
    }
    case 'invalid_grant': {
      return 'Username or password are invalid'
    }
    case 'network_failed': {
      return 'There was an issue logging you in, please ty again'
    }
    default: {
      return 'There was an issue logging you in, please ty again'
    }
  }
}
