import { MaterialCommunityIcons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { StyleSheet, View } from 'react-native'

const SIZE_OF_ICON = 28

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; isFocus: boolean }) {
  return <FontAwesome size={SIZE_OF_ICON} style={{ marginBottom: -3 }} color={props.isFocus ? '#28AF6E' : '#BDBDBD'} {...props} />
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarActiveTintColor: '#28AF6E',
          tabBarInactiveTintColor: '#BDBDBD',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon name='files-o' isFocus={focused} />,
        }}
      />
      <Tabs.Screen
        name='Diagnose'
        options={{
          title: 'Diagnose',
          tabBarActiveTintColor: '#28AF6E',
          tabBarInactiveTintColor: '#BDBDBD',
          tabBarIcon: ({ focused }) => <TabBarIcon name='heartbeat' isFocus={focused} />,
        }}
      />
      <Tabs.Screen
        name='Camera'
        options={{
          title: '',
          tabBarIcon: () => {
            return (
              <View style={styles.cameraTabButton}>
                <MaterialCommunityIcons name='line-scan' size={SIZE_OF_ICON} color={'white'} />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name='MyGarden'
        options={{
          title: 'My Garden',
          tabBarActiveTintColor: '#28AF6E',
          tabBarInactiveTintColor: '#BDBDBD',
          tabBarIcon: ({ focused }) => <TabBarIcon name='leaf' isFocus={focused} />,
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          title: 'Profile',
          tabBarActiveTintColor: '#28AF6E',
          tabBarInactiveTintColor: '#BDBDBD',
          tabBarIcon: ({ focused }) => <TabBarIcon name='user' isFocus={focused} />,
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  cameraTabButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
    backgroundColor: '#28AF6E',
    borderWidth: 4,
    borderColor: '#FFFFFF3D',
    borderRadius: 50,
    height: 75,
    width: 75,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowColor: '#ddd',
  },
})
