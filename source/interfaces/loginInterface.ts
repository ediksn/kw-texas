export interface LogInProps {
  username: string
  password: string
}

export interface StorageLogInResponse {
  accessToken: string
  refreshToken: string
  idToken: string
  expiresIn: string
}

export interface LogInProduceProps {
  type: string
  payload?: any
}

export interface LogInReducerProps {
  draftState: any
  payload?: any
}
