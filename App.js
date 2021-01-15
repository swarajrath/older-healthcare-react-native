import React from 'react';
import Providers from './navigation';
import * as firebase from 'firebase';
import 'firebase/firestore'
import Fire from './firebaseConfig'
import {firebaseConfig} from './firebaseConfig'

if (firebase.apps.length === 0) {
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
}

const App = () => {
  return <Providers />;
}

export default App;
