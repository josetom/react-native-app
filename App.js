import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/pages/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
