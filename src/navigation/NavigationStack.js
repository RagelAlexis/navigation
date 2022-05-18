//Nous importons react
import React from 'react'
//Nous importons NavigationContainer de react-navigation
import { NavigationContainer } from '@react-navigation/native'
//Nous importons createNativeStackNavigator de react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Nous importons les écrans que nous voulons insérer dans notre stack navigation
import NavigationDrawer from './NavigationDrawer'
import Home from '../screens/Home'

//Nous instancions une constante Stack qui nous initialisons à la fonction createNativeStackNavigator
const Stack = createNativeStackNavigator()
const NavigationStack = () => {
  return (
    //Nous englobons la navigation dans un NavigationContainer
    <NavigationContainer>
      {/* Nous créeons un Stack Navigator qui contiendra les deux écrans que nous voulons affiché en stack */}
      <Stack.Navigator
        //Nous lui passons une options pour cacher le header
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Par défaut c'est le premier screen qui sera afficher */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={NavigationDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack
