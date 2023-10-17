import React from 'react'
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons'

// import styles from './styles'

const features = [
  {
    title: 'Unlimited',
    detail: 'Plant identify',
    icon: <MaterialCommunityIcons name='credit-card-scan' size={18} color='white' />,
  },
  { title: 'Faster', detail: 'Process', icon: <MaterialIcons name='speed' size={18} color='white' /> },
  { title: 'Detailed', detail: 'Planet care', icon: <FontAwesome name='leaf' size={18} color='white' /> },
]

export default function OnboardingThree() {
  const [activeButton, setActiveButton] = React.useState(1)

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../../assets/onboarding3.png')} />
      <View style={styles.closeButton}>
        <AntDesign name='close' size={12} color='white' />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          <Text style={styles.titleBold}> PlantApp </Text>
          Premium
        </Text>
        <Text style={styles.subTitle}>Access All Features</Text>
      </View>
      <View style={styles.section}>
        <FlatList
          data={features}
          horizontal={true}
          renderItem={data => {
            return (
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>{data.item.icon}</View>
                <View style={styles.featureInfo}>
                  <Text style={[styles.title, { height: 24, fontSize: 20 }]}>{data.item.title}</Text>
                  <Text style={[styles.subTitle, { height: 18, fontSize: 13 }]}>{data.item.detail}</Text>
                </View>
              </View>
            )
          }}
        />
      </View>
      <Pressable onPress={() => setActiveButton(0)}>
        <View style={styles.section}>
          <View style={[styles.button, activeButton === 0 ? styles.activeButton : null]}>
            <View style={[styles.customRadio, activeButton === 0 ? styles.customRadioActive : null]}>
              {activeButton === 0 ? <View style={styles.customRatioCenter}></View> : null}
            </View>
            <View>
              <Text style={styles.buttonText}>1 Month</Text>
              <Text style={styles.buttonTextSub}>$2.99/month, auto renewable</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={() => setActiveButton(1)}>
        <View style={styles.section}>
          <LinearGradient
            start={{ x: 1, y: -10 }}
            end={{ x: 0.5, y: 1 }}
            colors={['#28AF6E00', '#101e17']}
            style={[styles.button, activeButton === 1 ? styles.activeButton : null]}
          >
            <View style={[styles.customRadio, activeButton === 1 ? styles.customRadioActive : null]}>
              {activeButton === 1 ? <View style={styles.customRatioCenter}></View> : null}
            </View>
            <View>
              <Text style={styles.buttonText}>1 Year</Text>
              <Text style={styles.buttonTextSub}>First 3 days free, then $529,99/year</Text>
            </View>
            <View style={styles.save}>
              <Text style={styles.saveText}>Save 50%</Text>
            </View>
          </LinearGradient>
        </View>
      </Pressable>
      <View style={styles.section}>
        <Pressable style={[styles.button, { backgroundColor: '#28AF6E', justifyContent: 'center' }]}>
          <Text style={styles.buttonText}>Try free for 3 days</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={[styles.terms, { fontSize: 9 }]}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly
          Subscription is Auto-Renewable
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.terms}>Terms • Privacy • Restore</Text>
      </View>
    </SafeAreaView>
  )
}

// #101e17
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    backgroundColor: '#101e17',
  },
  section: {
    paddingHorizontal: 24,
    marginVertical: 8,
  },
  featureCard: {
    flex: 1,
    width: 156,
    height: 130,
    backgroundColor: '#FFFFFF14',
    borderRadius: 14,
    marginRight: 8,
    padding: 16,
  },
  featureIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000003D',
    borderRadius: 8,
    width: 40,
    height: 40,
    padding: 8,
  },
  featureInfo: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    maxHeight: 650,
    position: 'absolute',
    objectFit: 'contain',
    top: -55,
  },
  title: {
    height: 47,
    fontFamily: 'Rubik-Light',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: -1,
    textAlign: 'left',
    color: 'white',
  },
  titleBold: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '800',
  },
  subTitle: {
    fontFamily: 'Rubik-Light',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.37,
    textAlign: 'left',
    color: '#FFFFFFB2',
  },
  button: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 12,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF0D',
    borderColor: '#FFFFFF4D',
    borderWidth: 0.5,
  },
  activeButton: {
    borderWidth: 1.5,
    borderColor: '#28AF6E',
    backgroundColor: '#101e17',
  },
  buttonText: {
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: 'white',
    textAlign: 'left',
  },
  buttonTextSub: {
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#FFFFFFB2',
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
  customRadio: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF0D',
    height: 24,
    width: 24,
    borderRadius: 50,
  },
  customRadioActive: {
    backgroundColor: '#28AF6E',
    height: 24,
    width: 24,
    borderRadius: 50,
  },
  customRatioCenter: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  save: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    padding: 4,
    right: 0,
    top: 0,
    height: 27,
    width: 80,
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: '#28AF6E',
  },
  saveText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
  },
  closeButton: {
    position: 'absolute',
    top: 55,
    right: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#00000066',
  },
})
