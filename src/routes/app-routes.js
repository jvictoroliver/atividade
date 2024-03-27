import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Details from '../pages/details';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ title: 'Conheça o Brasil' }}
        />
        <Stack.Screen 
          name="Details" 
          component={ Details } 
          options={{ title: 'Saiba mais' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;