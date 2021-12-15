import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  modal: {
    flex: 1
  },
  backdrop: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  context: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    elevation: 4,
    minHeight: 48,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    minWidth: 160
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: 'rgba(174, 178, 186, 0.2)'
  },
  itemSeparated: {
    borderBottomWidth: 1
  },
  title: {
    color: theme.darkGrey,
    fontFamily: 'Mulish-Regular',
    fontSize: 14
  },
  checkmark: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },
  dropdownHeader: {
    color: theme.post.inputText,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700'
  }
})
