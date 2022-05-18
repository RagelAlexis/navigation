//Nous importons react
import React from 'react'
//Nous importons la fonction createDrawerNavigator de react-navigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer'

//Nous importons les 3 écrans que nous voulons ajouter à notre Drawer
import AdaLovelace from '../screens/AdaLovelace'
import Personnage from '../screens/Personnage'
import Biographie from '../screens/Biographie'

//Nous instancions une constante Drawer qui nous initialisons à la fonction createDrawerNavigator
const Drawer = createDrawerNavigator()

const NavigationDrawer = () => {
  return (
    //Nous utilisons Drawer.Navigator pour englober nos différents écran et leurs noms
    <Drawer.Navigator>
      <Drawer.Screen component={AdaLovelace} name="Ada Lovelace" />
      <Drawer.Screen component={Personnage} name="Personnage" />
      <Drawer.Screen component={Biographie} name="Biographie" />
    </Drawer.Navigator>
  )
}

export default NavigationDrawer
