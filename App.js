import { NavigationContainer } from '@react-navigation/native';
import ContextDoctor from './src/context/ContextDoctor';
import StackNavigation from './src/navigations/StackNavigation';
import React from 'react';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens();
const App = () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <ContextDoctor>
        <StackNavigation />
      </ContextDoctor>
      <Toast />
    </NavigationContainer>

  )
}

export default App

