import React, { memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigation from '~/screens/Navigation'

export const Screens = memo(() => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
))
