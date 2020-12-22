import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createStackNavigator()


export default function AuthStack() {

  const [isFirstLaunch, setisFirstLaunch] = React.useState(null)

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setisFirstLaunch(true)
      } else {
        setisFirstLaunch(false)
      }
    })
  }, [])

  if (isFirstLaunch == null) {
    return null
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding'
  } else {
    routeName = 'Login'
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
      <Stack.Screen name="Signup" component={SignupScreen}
        options={{
          title: '', headerStyle: { backgroundColor: '#f9fafd', shadowColor: '#f9fafd', elevation: 0 },
          headerLeft: () => {
            <View style={{ marginLeft: 10 }}>
              <FontAwesome.Button name="long-arrow-left" size={25} backgroundColor='#f9fafd' color="#333333"
                onPress={() => Navigation.navigate('Login')} />
            </View>
          }
        }} />
    </Stack.Navigator>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
