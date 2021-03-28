import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthorRegistration from './src/components/Author/authorRegistration';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthorRegistration />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: '#fff'
  },
});
