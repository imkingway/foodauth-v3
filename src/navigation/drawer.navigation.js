import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavigation from './bottom.navigation';
import { LoginScreen } from '../routers';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


//implement to create side bar 
 const App = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name = "Home" component = {BottomNavigation} />
        <Drawer.Screen name = "Sign Out" component = {LoginScreen} />
      </Drawer.Navigator>
  )
}

export default App;







