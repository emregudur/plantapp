import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started</Text>
      <View style={styles.separator} />
      <Link href={'/Home'}>Go home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: 0.07,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
