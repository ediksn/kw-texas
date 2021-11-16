jest.mock(
  'rn-fetch-blob',
  () => {
    return {
      DocumentDir: () => {},
      ImageCache: {
        get: {
          clear: () => {}
        }
      },
      fs: {
        exists: jest.fn(),
        dirs: {
          MainBundleDir: () => {},
          CacheDir: () => {},
          DocumentDir: () => {}
        }
      },
      fetch: () => ({ t: (key: any) => key })
    }
  },
  { virtual: true }
)

export {}
