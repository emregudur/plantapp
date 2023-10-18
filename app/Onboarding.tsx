import React from 'react'
import { StyleSheet, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import Onboarding from '../components/Onboarding/index'

export default function Home() {
  return (
    <PagerView style={styles.viewPager} initialPage={0}>
      <View key='1'>
        <Onboarding.One />
      </View>
      <View key='2'>
        <Onboarding.Two />
      </View>
      <View key='3'>
        <Onboarding.Three />
      </View>
    </PagerView>
  )
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
})
