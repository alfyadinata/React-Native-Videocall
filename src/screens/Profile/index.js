import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar, Appbar, List, Title } from 'react-native-paper'
import { colors } from '../../styles/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Gap } from '../../components'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title='Profile' />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity>
                        <Avatar.Image size={150} source={{ uri: 'https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} />
                    </TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="camera" size={25} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Gap height={30} />
                <List.Item
                    title="Full Name"
                    description={() => <Text style={styles.menuTitle}>Alfy Adinata</Text>}
                    left={props => <MaterialCommunityIcons name="camera" {...props} color={colors.primary} size={25} />}
                    right={() => <MaterialCommunityIcons name="pencil" color={colors.primary} onPress={() => console.log('o')} size={25} />}
                />
                <View style={styles.line} />
                <List.Item
                    title="Info"
                    description={() => <Text style={styles.menuTitle}>Untuk menambah keceriaan pergantian tahun baru, aku punya promo spesial awal tahun untuk kamu.</Text>}
                    left={props => <MaterialCommunityIcons name="folder-information" {...props} color={colors.primary} size={25} />}
                    right={() => <MaterialCommunityIcons name="pencil" color={colors.primary} onPress={() => console.log('o')} size={25} />}
                />
                <View style={styles.line} />
                <List.Item
                    title="Email Address"
                    description={() => <Text style={styles.menuTitle}>alfymuhammad7@gmail.com</Text>}
                    left={props => <MaterialCommunityIcons name="gmail" {...props} color={colors.primary} size={25} />}
                />

            </ScrollView>
            <View style={styles.avatarContainer}>
                <Title style={{ color: colors.primary }}>Version 1.0</Title>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    avatarContainer: {
        alignItems: 'center',
        paddingTop: 20
    },
    iconContainer: {
        position: 'absolute',
        top: '80%',
        right: '30%',
        backgroundColor: colors.primary,
        padding: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.black
    },
    menuTitle: {
        fontSize: 15,
        opacity: 0.5
    },
    line: {
        borderBottomColor: colors.black,
        borderBottomWidth: 0.8
    }
})

export default Profile
