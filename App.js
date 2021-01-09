import React, { Fragment } from 'react'
import FlashMessage from "react-native-flash-message"
import { StatusBar } from 'react-native'
import AppNavigator from './src/router'
import { colors } from './src/styles/colors'

function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <AppNavigator />
      <FlashMessage position="top" />
    </Fragment>
  )
}

export default App