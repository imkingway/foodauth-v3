import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {HomeScreen, CameraScreen, ProfileScreen} from '../routers/index';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CameraStack = createStackNavigator();


const BottomNavigation = () => {
    return (
        <Tab.Navigator 
          initialRouteName="Home"
          activeColor="#8ee3e8"
          inactiveColor="#FFFFFF"
          barStyle={{ backgroundColor: "#fb5b5a", height: 65 }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon 
                name= 'home'
                color={color} 
                size={26} 
                />
              ),
            }}
          />
          <Tab.Screen
            name="Scan"
            component={CameraStackScreen}
            options={{
              tabBarLabel: 'Camera',
              tabBarIcon: ({ color }) => (
                <Icon name='camera' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Icon name="user-circle" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

//implement to create profile stack 
const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator>
        <HomeStack.Screen name = "Home" component = {HomeScreen}
        options = {{
          headerLeft: () => (
            <Icon.Button 
            name= 'bars' 
            size={25}
            backgroundColor ="#fb5b5a" 
            onPress = {() => navigation.openDrawer()}
            ></Icon.Button>
          )}
        }/>
      </HomeStack.Navigator>
    )
  }
  
  //implement to create profile stack 
  const ProfileStackScreen = ({}) => {
    return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name = "Profile" component = {ProfileScreen} />
    </ProfileStack.Navigator>
    )
  }

  const CameraStackScreen = ({}) => {
    return(
    <CameraStack.Navigator>
      <CameraStack.Screen name = "Scan" component = {CameraScreen} color = "#8ee3e8"/>
    </CameraStack.Navigator>
    )
  }