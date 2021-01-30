import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, OnboardingScreen, RegisterScreen} from '../routers/index';
import DrawerNavigation from './drawer.navigation';

export default function App() {
  const Stack = createStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={RegisterScreen} />
        <Stack.Screen name="home" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
