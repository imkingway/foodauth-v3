/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation/navigation';
import Drawer from './src/navigation/drawer.navigation';
import {NavigationContainer} from '@react-navigation/native';


const App: () => React$Node = () => {
  return (
    <>
      {/* <Navigation /> */}
      <NavigationContainer>
       <Drawer />
      </NavigationContainer>
      
    </>
  );
};


export default App;
