export interface LogInProps {
  username: string
  password: string
}

export interface LogInResponse {
  access_token: string
  refresh_token: string
  id_token: string
  expires_in: string
  session_token: string
}

export interface LogInProduceProps {
  type: string
  payload?: any
}

export interface LogInReducerProps {
  draftState: any
  payload?: any
}
