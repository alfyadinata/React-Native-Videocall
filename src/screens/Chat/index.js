import React, { useEffect, useState, Fragment } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput, Card, Paragraph, Appbar } from 'react-native-paper'
import { Fire } from '../../config'
import { colors } from '../../styles/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Chat = ({ route, navigation }) => {
    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')
    const [otherPerson, setOtherPerson] = useState({
        uid: '21kjas212',
    })
    const [chatData, setChatData] = useState([])

    useEffect(() => {
        const { otherUser } = route.params;
        setOtherPerson(otherUser)

        getUser()

        const chatUrl = `/chatting/${user.uid}_${otherPerson.uid}/allChat/`

        Fire.database().ref(chatUrl).on('value', (snap) => {
            if (snap.val()) {
                const dataSnapshot = snap.val()
                const allDataChat = []

                Object.keys(dataSnapshot).map(key => {
                    const dataChat = dataSnapshot[key]
                    const newDataChat = []

                    Object.keys(dataChat).map(itemChat => {
                        newDataChat.push({
                            id: itemChat,
                            data: dataChat[itemChat]
                        })
                    })

                    allDataChat.push({
                        id: key,
                        data: newDataChat
                    })
                })
                setChatData(allDataChat)
                console.log('all chat: ', allDataChat)
            }
        })
    }, [otherPerson.uid, user.uid])

    const getUser = async () => {
        const userData = await AsyncStorage.getItem('user')
        setUser(JSON.parse(userData))
    }

    const handleSend = () => {
        const today = new Date()
        const hour = today.getHours()
        const minutes = today.getMinutes()
        const year = today.getFullYear()
        const date = today.getDate()
        const month = today.getMonth() + 1

        const chatID = `${user.uid}_${otherPerson.uid}`
        const chatUrl = `/chatting/${chatID}/allChat/${year}-${month}-${date}`

        const data = {
            sendBy: user.uid,
            chatDate: new Date().getTime(),
            chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
            chatContent: message
        }

        const messageUser = `messages/${user.uid}/${chatID}`
        const messageOtherPerson = `messages/${otherPerson.uid}/${chatID}`
        const historyChatUser = {
            lastContentChat: message,
            lastChatDate: today.getTime(),
            uidPartner: otherPerson.uid
        }
        const historyChatOtherPerson = {
            lastContentChat: message,
            lastChatDate: today.getTime(),
            uidPartner: user.uid
        }

        Fire.database().ref(chatUrl)
            .push(data).then(() => {
                setMessage('')
                // set history user
                Fire.database().ref(messageUser).set(historyChatUser)
                // set history other person
                Fire.database().ref(messageOtherPerson).set(historyChatOtherPerson)
            }).catch(err => {
                showMessage({
                    message: err.message,
                    type: 'danger'
                })
            })
    }
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Title" subtitle="Subtitle" />
                <Appbar.Action icon="magnify" onPress={() => console.log('Hello')} />
                <Appbar.Action icon="dots-vertical" onPress={() => console.log('Hello')} />
            </Appbar.Header>
            <ScrollView>
                {
                    chatData.map((chat) => {
                        return (
                            <Fragment key={chat.id}>
                                <Paragraph>{chat.id}</Paragraph>
                                {chat.data.map((itemChat, key) => {
                                    return (
                                        <View style={user.uid === itemChat.data.sendBy ? styles.messageOut : styles.messageIn} key={itemChat.id}>
                                            <View style={styles.messaging}>
                                                <Card style={[styles.card, { backgroundColor: user.uid === itemChat.data.sendBy ? '#e6e3e3' : '#fff' }]}>
                                                    <Card.Content>
                                                        <Paragraph>{itemChat.data.chatContent}</Paragraph>
                                                    </Card.Content>
                                                    <Card.Actions>
                                                        <Paragraph style={styles.times}>{itemChat.data.chatTime}</Paragraph>
                                                    </Card.Actions>
                                                </Card>
                                            </View>
                                        </View>
                                    )
                                })}
                            </Fragment>
                        )
                    })
                }
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    placeholder="Type a message"
                    right={<TextInput.Icon name="send" onPress={handleSend} />}
                    onChangeText={(value) => setMessage(value)}
                    value={message}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputContainer: {

    },
    times: {
        marginLeft: 20
    },
    messageIn: {
        paddingRight: '50%'
    },
    messageOut: {
        paddingLeft: '50%'
    },
    messaging: {
        padding: 10
    },
    card: {
        paddingRight: 10,
        shadowColor: colors.blackShadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    peopleName: {
        fontWeight: 'bold',
        opacity: 0.5
    }
})

export default Chat
