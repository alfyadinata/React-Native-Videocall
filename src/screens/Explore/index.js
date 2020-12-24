import React from 'react'
import { View, Text, StyleSheet, Image, Modal, Alert, ActivityIndicator, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Searchbar } from 'react-native-paper'
import { useState } from 'react/cjs/react.development'
import { colors } from '../../styles/colors'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useEffect } from 'react'

const Explore = () => {
    const [data, setData] = useState([
        {
            path: 'https://images.pexels.com/photos/4394955/pexels-photo-4394955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5979678/pexels-photo-5979678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4394821/pexels-photo-4394821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5309143/pexels-photo-5309143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1094720/pexels-photo-1094720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5652782/pexels-photo-5652782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4906281/pexels-photo-4906281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5373737/pexels-photo-5373737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5373737/pexels-photo-5373737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },


        {
            path: 'https://images.pexels.com/photos/5360060/pexels-photo-5360060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/709790/pexels-photo-709790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3420044/pexels-photo-3420044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5098976/pexels-photo-5098976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4960129/pexels-photo-4960129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        // double here
        {
            path: 'https://images.pexels.com/photos/4394955/pexels-photo-4394955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5979678/pexels-photo-5979678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4394821/pexels-photo-4394821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5309143/pexels-photo-5309143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1094720/pexels-photo-1094720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5652782/pexels-photo-5652782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4906281/pexels-photo-4906281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5373737/pexels-photo-5373737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5373737/pexels-photo-5373737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },


        {
            path: 'https://images.pexels.com/photos/5360060/pexels-photo-5360060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/709790/pexels-photo-709790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3420044/pexels-photo-3420044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/5098976/pexels-photo-5098976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            path: 'https://images.pexels.com/photos/4960129/pexels-photo-4960129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            console.warn('ok')
        }, 1000);
    }, [setIsLoading])
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Find People"
            />
            <Modal
                animationType="slide"
                transparent={true}
                style={styles.modal}
                statusBarTranslucent={true}
                visible={modalVisible}
                style={{ backgroundColor: 'transparent' }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image resizeMode="contain" resizeMethod="scale" source={{ uri: 'https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={[styles.img, { width: 343, height: 200, }]} />
                        <View style={{ padding: 10 }}>
                            <Text style={styles.peopleName}>Olivia Stefani, 22 Years Old</Text>
                            <Text>New comments cannot be posted and votes cannot be cast. Sort by. best ... I tried to wrap touchableopacity around modal but it is not working. If you know so ...
Anda mengunjungi halaman ini pada 23/12/20.</Text>
                            <Button
                                onPress={toggleModal}
                                mode="contained"
                                icon="message"
                            >
                                Contact Her
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    isLoading && (
                        <SkeletonPlaceholder backgroundColor='#dfdfdf'>
                            <View style={styles.row}>
                                <SkeletonPlaceholder.Item width={120} height={120} borderColor={colors.white} borderWidth={1} />
                                <SkeletonPlaceholder.Item width={120} height={120} />
                                <SkeletonPlaceholder.Item width={120} height={120} />
                            </View>
                        </SkeletonPlaceholder>
                    )
                }
                <View style={styles.row}>
                    {
                        data.map((row, index) => {
                            return (
                                <TouchableOpacity style={styles.boxImg} key={index} onPress={toggleModal}>
                                    <Image
                                        blurRadius={6}
                                        source={{ uri: row.path }}
                                        resizeMethod="scale"
                                        resizeMode="contain"
                                        style={styles.img}
                                    />
                                    <Text style={{ color: 'white', fontSize: 16, zIndex: -3 }}>Clarisa</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <ActivityIndicator
                    color={colors.primary}
                    size="large"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        // flex: 1,
        width: 200,
        height: 120,
        borderColor: colors.white,
        borderWidth: 0.8,
        borderRadius: 1,
    },
    boxImg: {
        width: 120,
        height: 120,
        alignItems: 'center',
    },
    modal: {
        backgroundColor: 'red',
        opacity: 0.4
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        opacity: 1,
        margin: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        // padding: 15,
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    peopleName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Explore
