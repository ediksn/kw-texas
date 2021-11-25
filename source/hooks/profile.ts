export const useGetInitials = (fullname: string = '') => {
  return (!!fullname.length && fullname.toLowerCase().trim().match(/\b\w/g).join('').substr(0, 2).toUpperCase()) || ''
}
