import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#546de5',
        accent: 'yellow',
    },
};

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);