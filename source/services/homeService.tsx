import { axiosInstanceTokens } from './config'

export default {
  getPickPrompts: () => {
    return [
      {
        id: 1,
        link: 3,
        image: 'blue'
      },
      {
        id: 2,
        link: 8,
        image: 'gray'
      },
      {
        id: 3,
        link: 2,
        image: 'green'
      },
      {
        id: 4,
        link: 7,
        image: 'pink'
      },
      {
        id: 5,
        link: 10,
        image: 'purple'
      },
      {
        id: 6,
        link: 4,
        image: 'purple2'
      },
      {
        id: 7,
        link: 6,
        image: 'red'
      },
      {
        id: 8,
        link: 9,
        image: 'yellow'
      },
      {
        id: 9,
        link: 12,
        image: 'teal2'
      },
      {
        id: 10,
        link: 10,
        image: 'teal'
      }
    ]
  },
  getPosts: async (limit: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.get(`/connect/posts?page=1&limit=${limit}&pinned_at_top=false`, {})
  }
}
