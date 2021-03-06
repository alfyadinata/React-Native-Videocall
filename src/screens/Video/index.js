import React, { Component, useState, useEffect } from 'react';
import {
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View, StyleSheet, Dimensions
} from 'react-native';
import RtcEngine, {
    RtcLocalView,
    RtcRemoteView,
    VideoRenderMode,
} from 'react-native-agora';

import { requestCameraAndAudioPermission } from '../../config';


export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appId: '94f233d9caa04e6aba72d5e5f595286c',
            token: '00694f233d9caa04e6aba72d5e5f595286cIACqpu38npXcdw9zQmXY6KifWbAQbeXuUssa86bbRCzwGgJkFYoAAAAAEACZqwdIl1rxXwEAAQCXWvFf',
            channelName: 'channel-x',
            joinSucceed: false,
            peerIds: [],
        };
        if (Platform.OS === 'android') {
            // Request required permissions from Android
            requestCameraAndAudioPermission().then(() => {
                console.log('requested!');
            });
        }
    }

    componentDidMount() {
        this.init();
    }

    /**
     * @name init
     * @description Function to initialize the Rtc Engine, attach event listeners and actions
     */
    init = async () => {
        const { appId } = this.state;
        this._engine = await RtcEngine.create(appId);
        await this._engine.enableVideo();

        this._engine.addListener('Warning', (warn) => {
            console.log('Warning', warn);
        });

        this._engine.addListener('Error', (err) => {
            console.log('Error', err);
        });

        this._engine.addListener('UserJoined', (uid, elapsed) => {
            console.log('UserJoined', uid, elapsed);
            // Get current peer IDs
            const { peerIds } = this.state;
            // If new user
            if (peerIds.indexOf(uid) === -1) {
                this.setState({
                    // Add peer ID to state array
                    peerIds: [...peerIds, uid],
                });
            }
        });

        this._engine.addListener('UserOffline', (uid, reason) => {
            console.log('UserOffline', uid, reason);
            const { peerIds } = this.state;
            this.setState({
                // Remove peer ID from state array
                peerIds: peerIds.filter((id) => id !== uid),
            });
        });

        // If Local user joins RTC channel
        this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
            console.log('JoinChannelSuccess', channel, uid, elapsed);
            // Set state variable to true
            this.setState({
                joinSucceed: true,
            });
        });
    };

    /**
     * @name startCall
     * @description Function to start the call
     */
    startCall = async () => {
        // Join Channel using null token and channel name
        await this._engine?.joinChannel(
            this.state.token,
            this.state.channelName,
            null,
            0
        );
    };

    /**
     * @name endCall
     * @description Function to end the call
     */
    endCall = async () => {
        await this._engine?.leaveChannel();
        this.setState({ peerIds: [], joinSucceed: false });
    };

    render() {
        return (
            <View style={styles.max}>
                <View style={styles.max}>
                    {this._renderVideos()}
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity onPress={this.startCall} style={styles.button}>
                            <Text style={styles.buttonText}> Start Call </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.endCall} style={styles.button}>
                            <Text style={styles.buttonText}> End Call </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    _renderVideos = () => {
        const { joinSucceed } = this.state;
        return joinSucceed ? (
            <View style={styles.fullView}>
                <RtcLocalView.SurfaceView
                    style={styles.max}
                    channelId={this.state.channelName}
                    renderMode={VideoRenderMode.Hidden}
                />
                {this._renderRemoteVideos()}
            </View>
        ) : null;
    };

    _renderRemoteVideos = () => {
        const { peerIds } = this.state;
        return (
            <ScrollView
                style={styles.remoteContainer}
                contentContainerStyle={{ paddingHorizontal: 2.5 }}
                horizontal={true}
            >
                {peerIds.map((value) => {
                    return (
                        <RtcRemoteView.SurfaceView
                            style={styles.remote}
                            uid={value}
                            channelId={this.state.channelName}
                            renderMode={VideoRenderMode.Hidden}
                            zOrderMediaOverlay={true}
                        />
                    );
                })}
            </ScrollView>
        );
    };
}

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
    max: {
        flex: 1,
    },
    buttonHolder: {
        height: 100,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0093E9',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    fullView: {
        width: dimensions.width,
        height: dimensions.height - 100,
    },
    remoteContainer: {
        width: '100%',
        height: 150,
        position: 'absolute',
        top: 5,
    },
    remote: {
        width: 150,
        height: 150,
        marginHorizontal: 2.5,
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },
});
