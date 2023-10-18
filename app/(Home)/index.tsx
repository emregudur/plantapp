import { useEffect } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeCard from '../../components/HomeCard'
import { actions, useAppSelector } from '../../redux/store'
import { useDispatch } from 'react-redux'
const testData: any = []

const testData2: any = []

export default function HomeTab() {
  const dispatch = useDispatch()
  const { categories, err, isLoading } = useAppSelector(state => state.category)

  useEffect(() => {
    dispatch(actions.category.getCategories())
  }, [])

  useEffect(() => {
    console.log(err, isLoading)
  }, [categories, err, isLoading])

  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerBg} source={require('../../assets/header.png')} />
        <View style={styles.section}>
          <Text style={styles.title}>Hi, plant lover!</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.titleBold}>Good Afternoon! ⛅ </Text>
        </View>
        <View style={[styles.section, { flex: 2 }]}>
          <View style={styles.searchInputWrapper}>
            <FontAwesome style={styles.searchIcon} name='search' size={20} color={'#ABABAB'} />
            <TextInput style={styles.searchInput} placeholder='Search for plants' placeholderTextColor={'#AFAFAF'} />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.section}>
            <View style={styles.premiumContentWrapper}>
              <View style={styles.premiumContent}>
                <FontAwesome name='envelope' size={32} color='#F0D399' />
                <View style={styles.icon}>
                  <Text style={styles.iconBadge}>1</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: '#E5C990' }}>FREE Premium Available</Text>
                <Text style={{ color: '#FFDE9CCC' }}>Tap to upgrade your account!</Text>
              </View>
              <Entypo name='chevron-right' size={24} color='#F0D399' />
            </View>
          </View>
          <View style={styles.section}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.cardTitle}>Get Started</Text>
            </View>
            <ScrollView horizontal>
              {testData.map(item => (
                <HomeCard id={item.id} title={item.title} image_uri={item.image_uri} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.section}>
            {err ? <Text>Something went wrong</Text> : isLoading ? <Text>Loading...</Text> : null}
            <FlatList
              contentContainerStyle={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '100%',
              }}
              data={categories}
              numColumns={2}
              renderItem={({ item }) => (
                <HomeCard isCategory={true} id={item.id} image_uri={item.image.url ?? ''} title={item.name} />
              )}
              keyExtractor={(item: any) => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: '#F6F6F6',
  },
  header: {
    flex: 2,
    width: '100%',
    backgroundColor: '#F6F6F6',
  },
  content: {
    paddingTop: 24,
    backgroundColor: 'white',
    flex: 8,
    width: '100%',
  },
  section: {
    paddingHorizontal: 24,
    flex: 1,
    width: '100%',
  },
  title: {
    fontFamily: 'Rubik-Light',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0.07,
    textAlign: 'left',
  },
  titleBold: {
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: 0.3,
    textAlign: 'left',
  },
  searchInput: {
    width: '100%',
    padding: 20,
    paddingLeft: 60,
    backgroundColor: '#FFFFFFE0',
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: '#3C3C4340',
  },
  searchInputWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
    right: 0,
    zIndex: 2,
  },
  headerBg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 90,
    objectFit: 'fill',
  },
  premiumContentWrapper: {
    backgroundColor: '#24201A',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  premiumContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 36,
    height: 36,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 15,
    height: 15,
    position: 'absolute',
    borderRadius: 50,
    top: 0,
    right: 0,
  },
  iconBadge: {
    color: 'white',
  },
  cardTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.23,
  },
})
