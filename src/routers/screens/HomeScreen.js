import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={ styles.screen }>
      <Text>Welcome to FoodAPP</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
});

