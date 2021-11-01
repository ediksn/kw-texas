export const useContentTextPost = (content: string) => {
  const parseContent = content.slice(0, 1) === '{' ? JSON.parse(content) : content
  const contentText = Array.isArray(parseContent.blocks) ? parseContent.blocks[0].text : content

  return contentText
}
