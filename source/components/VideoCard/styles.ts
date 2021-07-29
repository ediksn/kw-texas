import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: '2%',
    marginLeft: '2%'
  },
  statisticsContainer: {
    flexDirection: 'row'
  },
  statisticsText: {
    marginBottom: '2%',
    marginHorizontal: '1.5%',
    fontSize: 12
  }
})
