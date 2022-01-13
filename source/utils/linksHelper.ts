export const regexLink = /^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/g

export const validateLink = (link: string) => {
  if (link === '') return false
  if (link.includes(' ')) return true
  const split = link.split('.')
  if (split.length === 2 && split[0] === 'www') return true
  const linkRegex = new RegExp(regexLink)
  const test = linkRegex.test(link)
  return !test
}
