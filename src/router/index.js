import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../styles/colors'

import { Register, Login, Home, Splash, Chat, Explore } from "../screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.blackShadow,
    },
};

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChatDetail" component={Chat} />
        </Stack.Navigator>
    )
}

function mainApp() {
    return (
        <Tab.Navigator activeColor={colors.blackShadow} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-dashboard" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-search-outline" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Call"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="video-box" color={color} size={28} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

function SplashStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Splash} />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Splash" component={SplashStack} />
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="MainApp" component={mainApp} />
                <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;