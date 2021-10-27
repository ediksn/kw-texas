import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { TextColorsInterface } from '~/functions/textColors'

export const styles = ({ text, background }: TextColorsInterface) => ({
  container: {
    backgroundColor: background.light,
    borderColor: background.dark,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(5),
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    color: text,
    fontSize: theme.fonts.MEDIUM_SIZE
  }
})
