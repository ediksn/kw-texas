jest.mock('react-native-biometrics', () => ({
  isSensorAvailable: jest.fn(() => Promise.resolve({ then: jest.fn() }))
}))

export {}
