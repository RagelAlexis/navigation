import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageScreen from '../screens/ImageScreen';
import TextScreen from '../screens/TextScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
        return (
        <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Image" component={ImageScreen} />
              <Tab.Screen name="Texte" component={TextScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        )
     
}

export default TabNavigation