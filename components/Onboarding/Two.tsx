import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import SliderDots from '../PaginationDots'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OnboardingTwo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>
          Get plant
          <Text style={styles.titleBold}> care guides </Text>
        </Text>
      </View>
      <View style={styles.section2}>
        <Image style={styles.image} source={require('../../assets/onboarding2.png')} />
      </View>
      <View style={styles.section}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <SliderDots activeIndex={1} />
      </View>
    </SafeAreaView>
  )
}
