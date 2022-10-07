import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Signup from './AuthScreens/Signup';

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Signup/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})