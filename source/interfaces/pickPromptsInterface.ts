export interface PickPromptInterface {
  id: number
  link: number
  image: string
}

export interface PickPromptsProduceProps {
  type: string
  payload?: {
    prompts: PickPromptInterface[]
  }
}

export interface PickPromptsReducerProps {
  draftState: any
  payload?: {
    prompts: PickPromptInterface[]
  }
}
