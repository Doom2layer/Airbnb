/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

export default App;
