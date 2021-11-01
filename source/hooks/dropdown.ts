import { useCallback, useMemo, useState } from 'react'
import isPromise from '~/utils/isPromise'

export function useButtonPressDecorator(onPress: any, isLoading = false) {
  const [isPending, setPending] = useState(false)
  const isLoaderVisible = isLoading || isPending

  const handlePress = useCallback(
    (...args) => {
      if (isLoading || isPending) {
        return
      }
      const pressResult = onPress(...args)
      if (isPromise(pressResult)) {
        setPending(true)
        pressResult.finally(() => setPending(false))
      }
    },
    [isLoading, isPending, onPress]
  )

  return useMemo(() => ({ handlePress, isLoaderVisible }), [handlePress, isLoaderVisible])
}
