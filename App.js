import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet, SafeAreaView } from 'react-native'
// import { SafeAreaView  } from 'react-native-safe-area-context';
import NavigationStack from './src/navigation/NavigationStack'
export default function App() {

  return (
    <SafeAreaView  style={styles.container}>
      {/* Nous englobons la navigation dans un NavigationStack */}
      <NavigationStack />
    </SafeAreaView >
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
