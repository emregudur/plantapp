import React from 'react'
import { StyleSheet, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OnboardingOne, OnboardingThree, OnboardingTwo } from '../components/OnboardingPages'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View key='1'>
          <OnboardingOne />
        </View>
        <View key='2'>
          <OnboardingTwo />
        </View>
        <View key='3'>
          <OnboardingThree />
        </View>
      </PagerView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: 20,
  },
})
