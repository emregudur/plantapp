import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Rubik-Light': require('../assets/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/Rubik-Medium.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
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
      <Stack.Screen name='Home' options={{ headerShown: false }} />
    </Stack>
  )
}
