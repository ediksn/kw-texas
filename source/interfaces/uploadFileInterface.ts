export interface UploadFileProduceProps {
  type: string
  payload?: {
    uploadedFile: string[]
  }
}

export interface UploadFileReducerProps {
  draftState: any
  payload?: {
    uploadedFile: string[]
  }
}
