import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>☕ Welcome to the Menu Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    color: '#6b4f1d',
    fontWeight: 'bold',
  },
});