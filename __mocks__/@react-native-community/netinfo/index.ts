jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: () => ({ t: (key: any) => key })
}))

export {}
