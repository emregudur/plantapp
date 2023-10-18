import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function GetStarted() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.titleBold}>PlantApp</Text>
        </Text>
        <Text style={styles.subTitle}>Identify more than 3000+ plants and 88% accuracy.</Text>
      </View>
      <View style={styles.section2}>
        <Image style={styles.image} source={require('../assets/getstarted.png')} />
      </View>
      <View style={styles.section}>
        <Link href={'/Onboarding'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}> Get Started</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.section}>
        <Text style={styles.terms}>By tapping next, you are agreeing to PlantID</Text>
        <Text style={{ ...styles.terms, textDecorationLine: 'underline' }}>Terms of Use & Privacy Policy.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: 20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 24,
  },
  section2: {
    flex: 8,
  },
  image: {
    width: '100%',
    height: '108%',
    left: 0,
    objectFit: 'contain',
  },
  title: {
    height: 33,
    fontFamily: 'Rubik-Light',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: 0.07,
    color: '#13231B',
  },
  titleBold: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '600',
  },
  subTitle: {
    fontFamily: 'Rubik-Light',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: '#13231BB2',
  },
  button: {
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#28AF6E',
  },
  buttonText: {
    fontFamily: 'Rubik-Light',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: 'white',
    textAlign: 'center',
  },
  terms: {
    display: 'flex',
    fontFamily: 'Rubik-Light',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.07,
    textAlign: 'center',
    color: '#597165B2',
  },
})
