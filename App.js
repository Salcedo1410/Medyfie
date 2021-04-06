/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* React components */
import React, { useEffect, useState } from 'react';

/* Librarys */
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

/* Components */
// import HomeNavigation from './Home/Navigation';
import MainNavigation from './Main/Navigation';
import Welcome from './Main/Welcome';

/* Functions */
import { StatusBar } from 'react-native';

export default function App() {

  const [userIsLogged, setUserIsLogged] = useState(false);

  let { store, persistor } = reduxStore();

  useEffect(() => SplashScreen.hide());

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#000" />
      <PersistGate loading={null} persistor={persistor}>
        {
          userIsLogged
            ? <Welcome />
            : <MainNavigation />
        }
      </PersistGate>
    </Provider>
  )
}

// welcomeVisibility
//             ? <Welcome onDone={() => {
//               setWelcomeVisibility(false);
//               // storeData('welcome', false);
//               AsyncStorage.setItem('maitas', "true")  
//             }} />
//             : 
