import React from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  activeIndex: number
}

export default function SliderDots({ activeIndex }: Props) {
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
})
