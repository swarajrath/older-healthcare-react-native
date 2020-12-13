import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import { StyleSheet, Text, View } from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTransparent: true,
          headerLeft: () => (
            <Image source={require('./assets/drawericon.png')} style={{}} />
          ),
          title: '',
          headerRight: () => (
            <Image source={require('./assets/user.png')} style={{ marginHorizontal: 20, marginTop: 40 }} />
          )
        }} />
        <Stack.Screen name="Mission" component={Mission} options={{
          headerTransparent: true,
          headerLeft: () => (
            <Image source={require('./assets/blackmenu.png')} style={{ marginHorizontal: 20, marginTop: 40 }} />
          ),
          title: '',
          headerRight: () => (
            <Image source={require('./assets/user.png')} style={{ marginHorizontal: 35, marginTop: 45 }} />
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
