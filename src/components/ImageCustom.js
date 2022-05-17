import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageCustom = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={styles.image} source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fzc-lgQyVzSc%2Fmaxresdefault.jpg&f=1&nofb=1'}} />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200,
    }
  })

export default ImageCustom

