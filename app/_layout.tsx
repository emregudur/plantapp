import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Rubik-Light': require('../assets/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/Rubik-Medium.ttf'),
  })

  useEffect(() => {
    ;(async () => {
      console.log(await AsyncStorage.getItem('isPayed'))
    })()
  }, [])

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='Onboarding' options={{ headerShown: false }} />
      <Stack.Screen name='(Home)' options={{ headerShown: false }} />
    </Stack>
  )
}
