import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { TextInput, Card, Button } from 'react-native-paper'
import { showMessage } from "react-native-flash-message";
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

import { Gap } from '../../components'

import { Fire } from '../../config'
import { useForm } from "../../utils"
import { colors } from '../../styles/colors'

const Register = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const [form, setForm] = useForm({
        fullName: '',
        email: '',
        password: ''
    })

    const onSubmit = async () => {
        setVisible(true)
        await Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((resp) => {
                const data = {
                    fullName: form.fullName,
                    email: form.email
                }
                Fire.database().ref('users/' + resp.user.uid + '/').set(data)
                showMessage({
                    message: 'Success created account',
                    type: 'success',
                    position: 'center'
                });
                setVisible(false)
            })
            .catch((error) => {
                showMessage({
                    message: error.message,
                    type: 'danger',
                    position: 'center'
                });
                setVisible(false)
            })
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/bg/people.png')} style={{ flex: 1, resizeMode: 'contain', width: windowWidth, height: windowHeight, }} />
            <Spinner
                visible={visible}
                textContent={'Processing...'}
            />
            <ScrollView>
                <View style={styles.row}>
                    <Card style={styles.card}>
                        <Card.Title title="Sign Up" />
                        <Card.Content>
                            <TextInput
                                label="Full Name"
                                mode="outlined"
                                onChangeText={value => setForm('fullName', value)}
                                value={form.fullName}
                            />
                            <Gap />
                            <TextInput
                                label="Email"
                                autoCapitalize="none"
                                mode="outlined"
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
                            <Button mode="contained" onPress={onSubmit}>Sign Up</Button>
                            <View style={styles.btnGroup}>
                                <Button onPress={() => navigation.navigate('Login')}>Already have an Account ?</Button>
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
        backgroundColor: colors.white
    },
    row: {
        padding: 10,
    },
    card: {
        shadowColor: colors.blackShadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Register
