import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  messageView: theme => ({
    alignSelf: 'center',
    color: theme.primaryColor || '#222'
  })
})
