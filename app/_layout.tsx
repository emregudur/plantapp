import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

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
  const navigation = useNavigation()
  return (
    <Provider store={store}>
      <Stack
        screenListeners={{
          focus: async () => {
            const { name } = navigation.getState().routes[0]
            const isPayed = (await AsyncStorage.getItem('isPayed')) === 'payed' ? true : false

            if (isPayed === false && name !== 'index') {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'index' }],
                })
              )
            } else if (isPayed === true && name !== '(Home)') {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: '(Home)' }],
                })
              )
            }
          },
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name='Onboarding' options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name='(Home)' options={{ headerShown: false, animation: 'none' }} />
      </Stack>
    </Provider>
  )
}
