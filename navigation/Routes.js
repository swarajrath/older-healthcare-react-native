import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import * as firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

const Routes = () => {

  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? Linking.openURL('https://swarajrath-coreenergy.netlify.app/') : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
