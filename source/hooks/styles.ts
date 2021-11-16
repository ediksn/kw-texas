const SHADOW_COLOR = 'black'
const SHADOW_OPACITY = 0.24
const DEFAULT_ELEVATION = 4

export const useCalculateShadow = () => {
  const height: any = {
    1: 0.5,
    2: 0.75
  }
  const radius: any = {
    1: 0.75,
    2: 1.5
  }

  return {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: height[DEFAULT_ELEVATION] || DEFAULT_ELEVATION - 1
    },
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: radius[DEFAULT_ELEVATION] || DEFAULT_ELEVATION
  }
}
