import React, { Fragment } from 'react'
import FlashMessage from "react-native-flash-message"
import { StatusBar } from 'react-native'
import AppNavigator from './src/router'

function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#182C61" />
      <AppNavigator />
      <FlashMessage position="top" />
    </Fragment>
  )
}

export default App