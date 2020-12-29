import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../styles/colors';

const Search = ({ navigation }) => {
    const data = [
        {
            text: 'Soft Black Color Palette'
        },
        {
            text: 'PNG Image'
        },
        {
            text: 'Screen was focused'
        },
        {
            text: 'Go to Settings'
        },
        {
            text: 'Instead of adding event'
        },
        {
            text: 'I will push my luck with you'
        },
        {
            text: 'it ties into the navigation lifecycle'
        },
        {
            text: 'Great music and upload as always!'
        },
        {
            text: 'You did it again! I love this '
        },
        {
            text: 'Es bonito ❤️'
        },
        {
            text: 'cause i"m dying to'
        },
        {
            text: 'did you say that'
        },
        {
            text: 'should i have known that you would take hold and never let go'
        },
        {
            text: 'and i know'
        },
        {
            text: 'photo by dear talented'
        },
        {
            text: 'The Chainsmokers - Push My Luck (Lyric Video)'
        },
    ]
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                autoFocus={true}
                icon={() => <MaterialCommunityIcons onPress={() => navigation.goBack()} name="arrow-left" size={32} />}
                clearIcon={() => <MaterialCommunityIcons name="close" size={32} />}
            />
            <ScrollView>
                {
                    data.map((val, key) => {
                        return (
                            <List.Item
                                key={key}
                                title={val.text}
                                left={props => <List.Icon {...props} icon={() => <MaterialCommunityIcons name="history" size={25} color={colors.black2} />} />}
                                right={props => <List.Icon {...props} icon={() => <MaterialCommunityIcons name="arrow-top-left" size={25} color={colors.black2} />} />}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default Search
