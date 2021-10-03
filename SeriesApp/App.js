import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import LandingPage from './src/pages/LandingPage';
import Settings from './src/pages/Settings';
import AddPage from './src/pages/AddPage';
import DetailPage from './src/pages/DetailPage';

import ButtonAdd from './src/components/Buttons/ButtonAdd';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './src/utils/Navigate';

import store from './src/store/store';
import { Provider, useSelector } from 'react-redux';
import Colors_services from './src/utils/Colors_layout';
import NavigationSettings from './src/utils/NavigationSettings';

const Stack = createNativeStackNavigator();

const AppWrapper = () => {

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <App />
      </NavigationContainer>
    </Provider>
  )
}

function App(props) {
  const token = useSelector((state) => state.login_reducer.token);

  return (
      <Stack.Navigator>

        { token ? (
        <>
        <Stack.Screen name="Landing" component={LandingPage}  options={{
          title:"",
          headerRight: () => (
            <ButtonAdd title="Add" name="AddPage" />
          ),
          headerLeft: () => (
            <ButtonAdd title="Set" name="Settings" />
          ),
          headerStyle:{
            backgroundColor: `${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`
          }
        }}/>
        <Stack.Screen  name="Settings" component={Settings} options={NavigationSettings.navigationOptions}/>
        <Stack.Screen  name="AddPage" component={AddPage} options={NavigationSettings.navigationOptionsDynamic({title:'Add a new Serie'})}/>
        <Stack.Screen  name="DetailPage" component={DetailPage} options={NavigationSettings.navigationOptions}/>
        </>
        ) 
          :  (
        <>
        <Stack.Screen name="Login" component={LoginPage} options={
          {headerShown:false}
        }/>
        <Stack.Screen name="Register" component={RegisterPage} options={{headerShown:false}} />
        </>
        )
      }

      </Stack.Navigator>
  );
}

export default AppWrapper;
