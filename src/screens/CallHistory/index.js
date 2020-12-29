import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Menu } from 'react-native-paper'
import { colors } from '../../styles/colors'

const CallHistory = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <Menu.Item icon="redo" onPress={() => { }} title="Redo" />
                    <Menu.Item icon="undo" onPress={() => { }} title="Undo" />
                    <Menu.Item icon="content-cut" onPress={() => { }} title="Cut" disabled />
                    <Menu.Item icon="content-copy" onPress={() => { }} title="Copy" disabled />
                    <Menu.Item icon="content-paste" onPress={() => { }} title="Paste" />
                </View>
            </ScrollView>
        </View>
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
