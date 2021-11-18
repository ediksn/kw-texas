export const loginErrors = (error: string | null) => {
  switch (error) {
    case 'invalid_request': {
      return 'components_Login_Username_password_invalid'
    }
    case 'invalid_grant': {
      return 'components_Login_Username_password_invalid'
    }
    case 'network_failed': {
      return 'components_Login_Issue'
    }
    default: {
      return 'components_Login_Issue'
    }
  }
}
