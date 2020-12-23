import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(async () => {
            await AsyncStorage.getItem('user').then((resp) => {
                if (resp) {
                    return navigation.replace('MainApp')
                }
                return navigation.replace('Auth')
            }).catch(() => {
                return navigation.replace('Auth')
            })
        }, 2000);
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
            <Text>Video Call</Text>
            <Image source={require('../../assets/bg/splash.png')} resizeMode="contain" resizeMethod="resize" style={{ width: '100%', height: '100%', }} />
        </View>
    )
}

export default Splash
