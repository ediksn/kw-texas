// react-native-android-keyboard-adjust.d.ts
declare module 'react-native-android-keyboard-adjust' {
  interface AndroidKeyboardAdjustStatic {
    setAdjustNothing: () => void
    setAdjustPan: () => void
    setAdjustResize: () => void
    setAdjustUnspecified: () => void
    setAlwaysVisible: () => void
    setAlwaysHidden: () => void
    setVisible: () => void
    setHidden: () => void
    setUnchanged: () => void
  }
  const AndroidKeyboardAdjust: AndroidKeyboardAdjustStatic
  export default AndroidKeyboardAdjust
}
