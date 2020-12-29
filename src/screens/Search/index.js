import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../styles/colors';

const Search = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                autoFocus={true}
                icon={() => <MaterialCommunityIcons onPress={() => navigation.goBack()} name="arrow-left" size={32} />}
                clearIcon={() => <MaterialCommunityIcons name="close" size={32} />}
            />
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
