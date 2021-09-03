export interface UploadVideoInterface {
  title: string
  description: string
  videoUrl: string
}

export interface UploadVideoProduceProps {
  type: string
  payload?: {
    uploadedVideo: UploadVideoInterface[]
  }
}

export interface UploadVideoReducerProps {
  draftState: any
  payload?: {
    uploadedVideo: UploadVideoInterface[]
  }
}
