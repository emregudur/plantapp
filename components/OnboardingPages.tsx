import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const SliderDots = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <View style={styles.dotsContainer}>
      {Array(3)
        .fill('')
        .map((_, i) => {
          return <View key={i} style={i === activeIndex ? styles.dotActive : styles.dot}></View>
        })}
    </View>
  )
}

export function OnboardingOne() {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>
          Take a photo to
          <Text style={styles.titleBold}> identify </Text>
          the plant!
        </Text>
      </View>
      <View style={styles.section2}>
        <Image style={styles.image} source={require('../assets/onboarding1.png')} />
      </View>
      <View style={styles.section}>
        <Link href={'/Home'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.section}>
        <SliderDots activeIndex={0} />
      </View>
    </>
  )
}

export function OnboardingTwo() {
  return (
    <>
      <Text>Second page</Text>
      <View style={styles.section}>
        <SliderDots activeIndex={1} />
      </View>
    </>
  )
}

export function OnboardingThree() {
  return (
    <>
      <Text>Third page</Text>
      <View style={styles.section}>
        <SliderDots activeIndex={2} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  dotsContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dotActive: {
    width: 10,
    height: 10,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: '#13231B',
  },
  dot: {
    width: 6,
    height: 6,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: '#13231B40',
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
    width: '100%',
    height: 66,
    gap: 8,

    fontFamily: 'Rubik-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: -1,
    textAlign: 'left',

    color: '#13231B',
  },
  titleBold: {
    fontWeight: '800',
  },
  subTitle: {
    fontFamily: 'Rubik-Medium',
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
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: 'white',
    textAlign: 'center',
  },
  terms: {
    display: 'flex',
    fontFamily: 'Rubik-Medium',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.07,
    textAlign: 'center',
    color: '#597165B2',
  },
})
