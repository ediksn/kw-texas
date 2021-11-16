beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.useFakeTimers()
})

export {}
