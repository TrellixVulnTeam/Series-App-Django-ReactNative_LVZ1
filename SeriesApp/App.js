import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginpage from './src/pages/Loginpage';
import RegisterPage from './src/pages/RegisterPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Loginpage} options={
            {headerShown:false}
          }/>
          <Stack.Screen name="Register" component={RegisterPage} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
