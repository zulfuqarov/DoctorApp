import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Home/Profile'
import Bookings from '../screens/Home/Bookings'
import Home from '../screens/Home/Home'

import Ionicons from 'react-native-vector-icons/Ionicons'

const MyBottom = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <MyBottom.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: 'white',  // Qızılı rəng (daha aydın görünər)
                tabBarInactiveTintColor: '#C0D4FB',

                tabBarStyle: {
                    height: 100,
                    paddingTop: 10,     
                    backgroundColor: "#2E6FF3" // Tünd göy (daha profesional görünüş)
                },
                tabBarLabelStyle: {
                    fontSize: 17,
                    paddingTop: 10
                },
            }}
        >
            <MyBottom.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Əsas',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={30} color={color} />
                    ),
                }}
            />
            <MyBottom.Screen
                name="Bookings"
                component={Bookings}
                options={{
                    tabBarLabel: 'Rezervlər',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={30} color={color} />
                    ),
                }}
            />
            <MyBottom.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profil',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={30} color={color} />
                    ),
                }}
            />

        </MyBottom.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})