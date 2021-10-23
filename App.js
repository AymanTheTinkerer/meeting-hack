import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MeetingCreate} from './src/components/MeetingCreate.js'
import "./styles2.css";

export default function App() {
    return (
      <View>
        <Text>p</Text>
        <MeetingCreate />
        <StatusBar style="auto" />
      </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   body: {
//     background: '#0e101c',
//   }
// });
