// JavaScript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/components/TelaInicial.js';
import TelaLogin from './src/components/TelaLogin.js';

const Stack = createStackNavigator();
console.log('TelaLogin type:', typeof TelaLogin); // deve imprimir "function"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}