import { convertFromRaw, ContentState, EditorState, convertToRaw } from 'draft-js'

export const useRichContent = (content: string) => {
  const contentState = ContentState.createFromText(content)
  const editorState = EditorState.createWithContent(contentState)

  return JSON.stringify(convertToRaw(editorState.getCurrentContent()))
}

export const useUnRichContent = (content: string) => {
  let contentState
  try {
    const raw = JSON.parse(content)

    contentState = convertFromRaw(raw)
  } catch {
    contentState = ContentState.createFromText(content)
  }
  const editorState = EditorState.createWithContent(contentState)

  return editorState.getCurrentContent().getPlainText()
}
