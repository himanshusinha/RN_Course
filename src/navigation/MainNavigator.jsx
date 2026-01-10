import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import ScreenC from '../screens/ScreenC'
import HooksIntroScreen from '../screens/HooksIntroScreen'
const MainNavigator  = () => {
  const Stack = createStackNavigator();
  return (
       <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HooksIntro" component={HooksIntroScreen} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
   );
};

export default MainNavigator;
