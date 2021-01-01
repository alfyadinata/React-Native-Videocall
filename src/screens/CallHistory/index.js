import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'
import { colors } from '../../styles/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const All = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={() => <MaterialCommunityIcons name="account-circle" size={35} color={colors.primary} />}
                        right={() => <MaterialCommunityIcons name="call-missed" size={35} color={colors.secondary} />}
                    />
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={() => <MaterialCommunityIcons name="account-circle" size={35} color={colors.primary} />}
                        right={() => <MaterialCommunityIcons name="call-made" size={35} color={colors.green} />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const Missed = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={() => <MaterialCommunityIcons name="account-circle" size={35} color={colors.primary} />}
                        right={() => <MaterialCommunityIcons name="call-missed" size={35} color={colors.secondary} />}
                    />
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={() => <MaterialCommunityIcons name="account-circle" size={35} color={colors.primary} />}
                        right={() => <MaterialCommunityIcons name="call-made" size={35} color={colors.green} />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const Connected = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={() => <MaterialCommunityIcons name="account-circle" size={35} color={colors.primary} />}
                        right={() => <MaterialCommunityIcons name="call-missed" size={35} color={colors.secondary} />}
                    />
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={() => <MaterialCommunityIcons name="account-circle" size={35} color={colors.primary} />}
                        right={() => <MaterialCommunityIcons name="call-made" size={35} color={colors.green} />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const CallHistory = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="All" component={All} />
            <Tab.Screen name="Missed" component={Missed} />
            <Tab.Screen name="Connected" component={Connected} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    row: {
    },
})

export default CallHistory
