import { scale as scaleSize, verticalScale } from 'react-native-size-matters'
import { useDeviceHeight } from '../../hooks/settings'

interface Props {
  buttonCoords: any[]
  contextCoords: any[]
  scale: number
  right?: number
  top?: number
}

const getAccessoryMenuPopUpPosition = ({ buttonCoords, contextCoords, scale, right = 0, top = 0 }: Props) => {
  const DISTANCE_FROM_END = 48
  const SCREEN_HEIGHT = useDeviceHeight()
  const NAVIGATION_BAR_HEIGHT = 56

  const [, , buttonWidth, buttonHeight, , buttonPY] = buttonCoords
  const [, , , contextHeight] = contextCoords
  const positionX = buttonWidth + scaleSize(right)

  const realHeight = scale === 1 ? contextHeight : (contextHeight * 100) / (scale * 100)
  const height = parseInt(realHeight, 10)

  const positionY =
    (buttonPY + buttonHeight + height > SCREEN_HEIGHT - (NAVIGATION_BAR_HEIGHT + DISTANCE_FROM_END)
      ? buttonPY - height
      : buttonPY + buttonHeight) + verticalScale(top)

  return [positionX, positionY]
}

export default getAccessoryMenuPopUpPosition
