import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Home = () => {
  //Nous instancions une variable navigation au HOOK useNavigation de react-navigation
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bonjour</Text>
        <Text style={styles.message}>
          Bienvenue sur l'application parlant d'Ada Lovelace
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          //Dans le hook useNavigation, nous pouvons accèder à la méthode navigate qui permet de se déplacer d'écran en écran.
          //Nous lui indiquons le nom de l'écran auquel nous souhaitons accéder.
          onPress={() => navigation.navigate('Main')}
          title="Entrer"
        />
      </View>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    width: '60%',
    alignSelf: 'center',
    margin: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
  },
  message: {
    textAlign: 'center',
  },
})
