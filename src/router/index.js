import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';

import { colors } from '../styles/colors'

import {
    Register, Login, Home, Splash,
    Chat, Explore, CallHistory, Search,
    Profile
} from "../screens";

// components
import { DrawerContent } from '../components'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
        </View>
    );
}

function Article() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
        </View>
    );
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
    },
};

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChatDetail" component={Chat} />
        </Stack.Navigator>
    )
}

function BottomApp() {
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
                component={CallHistory}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="video-box" color={color} size={28} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

function mainApp() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="App"
                component={BottomApp}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={28} />
                    ),
                    drawerLabel: 'Home Application'
                }}
            />
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-edit" color={color} size={28} />
                    ),
                    drawerLabel: 'Edit Profile'
                }}
            />
            <Drawer.Screen
                name="Article"
                component={Article}
            />
        </Drawer.Navigator>
    );
}

function SplashStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Splash} />
        </Stack.Navigator>
    )
}

function SearchStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
}

function ProfileStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Profile" component={Profile} />
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
                <Stack.Screen name="Search" component={SearchStack} />
                <Stack.Screen name="Profile" component={ProfileStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;