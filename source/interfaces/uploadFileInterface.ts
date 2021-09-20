export interface UploadFileInterface {
  videoUrl: string
}

export interface UploadFileProduceProps {
  type: string
  payload?: {
    uploadedFile: UploadFileInterface[]
  }
}

export interface UploadFileReducerProps {
  draftState: any
  payload?: {
    uploadedFile: UploadFileInterface[]
  }
}
