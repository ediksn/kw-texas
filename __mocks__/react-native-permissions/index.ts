/* eslint-disable @typescript-eslint/no-unused-expressions */
jest.mock('react-native//Libraries/PermissionsAndroid/PermissionsAndroid', () => ({
  PermissionsAndroid: {
    request: () => {
      true
    },
    check: () => {
      true
    }
  }
}))

export {}
