import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Form/Login';
import Register from '../screens/Form/Register';
import BottomNavigation from './BottomNavigation';
import DoctorDetails from '../screens/Home/DoctorDetails';
import DetailsCutomHeader from '../components/DoctorDetails/DetailsCutomHeader';
import AllDoctos from '../screens/Home/AllDoctors';

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
        name="HomePage"
        component={BottomNavigation}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />

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

      <MyStack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          headerShown: false, // ✅ Header'ı gizler
        }}
      />

      <MyStack.Screen
        name="AllDoctor"
        component={AllDoctos}
        options={{
          headerBackTitle: null,
          title: "Butun Hekimler",
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            backgroundColor: "white",
            height: 140,
            borderBottomWidth: 1,
            shadowColor: 'transparent',
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