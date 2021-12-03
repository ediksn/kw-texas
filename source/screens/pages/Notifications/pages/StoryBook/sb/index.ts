/* eslint-disable global-require */
import { configure, getStorybookUI } from '@storybook/react-native'
import AsyncStorage from '@react-native-community/async-storage'

configure(() => {
  // eslint-disable-next-line import/extensions
  require('./stories/KWcomponents.stories.tsx')
}, module)

export default getStorybookUI({
  asyncStorage: AsyncStorage
})
