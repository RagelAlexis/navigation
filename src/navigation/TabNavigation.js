import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageScreen from '../screens/ImageScreen';
import TextScreen from '../screens/TextScreen';
import { Platform } from 'react-native-web';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
        return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route})=> ({tabBarIcon:({focused})=> {
              let iconName 
              if (route.name === 'Image') {               
                Platform.OS === 'android'                 
                  ?                 
                  (iconName = focused ? 'md-image' : 'md-image-outline') 
                  :                
                  (iconName = focused ? 'ios-image' : 'ios-image-outline')               
                  iconName = focused 
                  ? 'ios-information-circle'                 
                  : 'ios-information-circle-outline'; 
                } else if (route.name === 'Texte') {               
                  Platform.OS === 'android'                
                  ?                 
                  (iconName = focused ? 'md-text' : 'md-text-outline')                 
                  :                 
                  (iconName = focused ? 'ios-text' : 'ios-text-outline')
                  
                }
            return <Ionicons name={iconName} size={32} />
            },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
              <Tab.Screen name="Image" component={ImageScreen} />
              <Tab.Screen name="Texte" component={TextScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        )
     
}

export default TabNavigation