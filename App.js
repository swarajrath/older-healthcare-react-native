import React from 'react';
import Providers from './navigation';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

if (firebase.apps.length === 0) {

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
}


export default function App() {

  let [fontsLoaded] = useFonts({
    'Kufam-SemiBoldItalic': require('./assets/fonts/Kufam-SemiBoldItalic.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf')
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return <Providers />;
  }

}

