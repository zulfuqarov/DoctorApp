import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile/Profile'
import Bookings from '../screens/Bookings/Bookings'
import Home from '../screens/Home/Home'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Chat from '../screens/Chat/Chat'

const MyBottom = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <MyBottom.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#C0D4FB',
                tabBarStyle: {
                    height: 80,
                    paddingTop: 0,
                    backgroundColor: "#2E6FF3"
                },
                tabBarLabelStyle: {
                    fontSize: 17,
                    paddingTop: 5
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
                        <Ionicons name="home" size={26} color={color} />
                    ),
                }}
            />

            <MyBottom.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Söhbət',
                    headerTitle: 'Söhbət',
                    headerTitleAlign: 'center', 
                    headerStyle: {
                        height: 120,
                        backgroundColor: '#f2f2f2',
                    },
                    headerTitleStyle: {
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#333',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble" size={26} color={color} />
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
                        <Ionicons name="calendar" size={26} color={color} />
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
                        <Ionicons name="people" size={26} color={color} />
                    ),
                }}
            />

        </MyBottom.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})