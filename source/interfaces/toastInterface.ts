export interface ToastProps {
  open: boolean
  title: string
  type?: string
  menuHeight: number
}

export interface ToastReducerProps {
  draftState: ToastProps
  payload?: any
}

export interface ToastProduceProps {
  type: string
  payload?: any
}
