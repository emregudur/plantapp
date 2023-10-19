import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PaginationDots from '../PaginationDots'
import styles from './styles'

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
        <PaginationDots activeIndex={1} />
      </View>
    </SafeAreaView>
  )
}
