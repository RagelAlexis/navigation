import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'

const AdaLovelace = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png',
        }}
      />
      <Text style={styles.text}>Ada LOVELACE</Text>
    </View>
  )
}

export default AdaLovelace

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
})
