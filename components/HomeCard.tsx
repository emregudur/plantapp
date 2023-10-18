import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'

interface Props {
  id: number
  title: string
  subtitle?: string
  image_uri: string
  uri?: string
  order?: number
  isCategory?: boolean
}

export default function HomeCard({ id, image_uri, title, isCategory = false }: Props) {
  return (
    <ImageBackground
      style={isCategory ? styles.categoryContent : styles.content}
      imageStyle={isCategory ? styles.categoryImage : styles.image}
      source={{ uri: image_uri }}
      key={id}
    >
      <Text style={isCategory ? styles.categoryTitle : styles.title}>{title}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 240,
    height: 160,
    marginRight: 12,
  },
  categoryContent: {
    display: 'flex',
    width: 158,
    height: 152,
    margin: 12,
  },
  image: {
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    borderRadius: 12,
  },
  categoryImage: {
    backgroundColor: '#F4F6F6',
    borderWidth: 0.5,
    borderColor: '#29BB892E',
    borderRadius: 12,
  },
  title: {
    color: 'white',
    padding: 20,
    fontFamily: 'Rubik-Medium',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.23,
    textAlign: 'left',
    bottom: 0,
  },
  categoryTitle: {
    width: '100%',
    color: 'black',
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.31,
    textAlign: 'left',
    paddingLeft: 20,
    paddingTop: 20,
  },
})
