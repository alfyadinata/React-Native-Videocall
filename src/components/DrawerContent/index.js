import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay';
import { Fire } from '../../config'
import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerContent({ navigation }, props) {
  const [visible, setVisible] = useState(false)
  const signOut = () => {
    Alert.alert(
      '',
      'Sign Out ?',
      [
        {
          text: 'Yeah',
          onPress: signOutProcess
        },
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
      ]
    )
  }

  const signOutProcess = () => {
    Fire.auth().signOut().then(async res => {
      await AsyncStorage.clear()
    }).catch((err) => {
      showMessage({
        message: err.message,
        position: 'center',
        type: 'warning'
      })
    })

    setTimeout(() => {
      setVisible(false)
      showMessage({
        message: "You're already exit",
        type: 'info',
        position: 'center'
      });
      navigation.replace('Auth')
    }, 1000);
  }
  return (
    <DrawerContentScrollView {...props}>
      <Spinner
        visible={visible}
        textContent={'Processing...'}
      />
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            style={{ alignSelf: 'center' }}
            size={70}
          />
          <View style={{ alignSelf: 'center' }}>
            <Title style={styles.title}>Dawid Urbaniak</Title>
            <Caption style={styles.caption}>@trensik</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  202
              </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  159
              </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => navigation.navigate('Profile')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Archieve Chat"
            onPress={() => { }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="playlist-star"
                color={color}
                size={size}
              />
            )}
            label="Saved Message"
            onPress={() => { }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="exit-to-app"
                color={color}
                size={size}
              />
            )}
            label="Sign Out"
            onPress={signOut}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => { }}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  )
}


export default DrawerContent
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});