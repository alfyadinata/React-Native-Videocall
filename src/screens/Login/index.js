import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { TextInput, Card, Button } from 'react-native-paper'
import { showMessage } from "react-native-flash-message";
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

import { Gap } from '../../components'

import { Fire } from '../../config'
import { useForm } from "../../utils"
import { colors } from '../../styles/colors'

const Login = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const [form, setForm] = useForm({
        email: '',
        password: ''
    })

    const onSubmit = () => {
        setVisible(true)
        Fire.auth().signInWithEmailAndPassword(form.email, form.password).then(resp => {
            Fire.database().ref(`users/${resp.user.uid}/`).once('value').then(async resDb => {
                if (resDb.val()) {
                    showMessage({
                        message: 'Authenticated',
                        type: 'info',
                    });
                    setVisible(false)
                    await AsyncStorage.setItem('user', JSON.stringify(resp.user))
                    navigation.replace('MainApp')
                }
            })
        }).catch(error => {
            setVisible(false)
            showMessage({
                message: error.message,
                type: 'danger',
                position: 'center'
            });
        })
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/bg/people.png')} style={{ flex: 1, resizeMode: 'contain', width: windowWidth, height: windowHeight, }} />
            <Spinner
                visible={visible}
                textContent={'Loading...'}
            />
            <ScrollView>
                <View style={styles.row}>
                    <Card style={styles.card}>
                        <Card.Title title="Sign In" />
                        <Card.Content>
                            <Gap />
                            <TextInput
                                label="Email"
                                mode="outlined"
                                autoCapitalize="none"
                                onChangeText={value => setForm('email', value)}
                                value={form.email}
                            />
                            <Gap />
                            <TextInput
                                label="Password"
                                mode="outlined"
                                onChangeText={value => setForm('password', value)}
                                value={form.password}
                                secureTextEntry={true}
                            />
                            <Gap />
                            <Button mode="contained" onPress={onSubmit}>Sign In</Button>
                            <View style={styles.btnGroup}>
                                <Button onPress={() => navigation.navigate('Register')}>Don't have an account? ?</Button>
                                <Button color={colors.secondary}>Forgot Password</Button>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        padding: 10,
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Login
