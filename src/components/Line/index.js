import React from 'react'
import { View } from 'react-native'
import { colors } from '../../styles/colors'

const Line = (props) => {
    return (
        <View
            style={{
                borderBottomColor: colors.black,
                borderBottomWidth: props.width ? props.width : 0.8
            }}
        />
    )
}

export default Line
