export interface PromptVideoInterface {
  id: number
}

export interface PromptVideoProduceProps {
  type: string
  payload?: {
    searchScriptMeeting: PromptVideoInterface[]
    page: number
  }
}

export interface PromptVideoReducerProps {
  draftState: any
  payload?: {
    searchScriptMeeting: PromptVideoInterface[]
    page: number
  }
}
