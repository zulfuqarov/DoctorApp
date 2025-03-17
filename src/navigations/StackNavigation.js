import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Form/Login';
import Register from '../screens/Form/Register';

const MyStack = createStackNavigator()


const StackNavigate = () => {


  return (
    <MyStack.Navigator
    >

      {/* {checkAuthLoading &&
                <MyStack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        title: "Giriş",
                        headerTitleAlign: "center",
                        headerLeft: () => null,
                        gestureEnabled: false,
                        headerShown: false
                    }}
                />
            } */}

      <MyStack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Giriş",
          gestureEnabled: false,
          headerLeft: () => null,
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            backgroundColor: "white",
            height: 200
          },

          headerTitleStyle: {
            color: "black",
            fontWeight: "bold",
            fontSize: 24,
          },
        }}

      />

      <MyStack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Qeydiyyat",
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            backgroundColor: "white",
            height: 145
          },

          headerTitleStyle: {
            color: "black",
            fontWeight: "bold",
            fontSize: 24,
          },

        }}
      />


    </MyStack.Navigator>
  )


}

export default StackNavigate

const styles = StyleSheet.create({})