import React from 'react'
import { View, Text } from 'react-native'

const Gap = (props) => {
    return (
        <View style={{ height: props.height ? props.height : 8, width: props.width ? props.width : '100%' }}>
        </View>
    )
}

export default Gap
