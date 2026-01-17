import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import ScreenC from '../screens/ScreenC'
import HooksIntroScreen from '../hooks/HooksIntroScreen'
import UseStateHookDemo from '../hooks/UseStateHookDemo'
import UseRefHookDemo from '../hooks/UseRefHookDemo'
import UseContextHookDemo from '../hooks/UseContextHookDemo'
import UseEffectHookDemo from '../hooks/UseEffectHookDemo'
import UserDetails from '../demo/UserDetails'
import TimersDemo from '../demo/TimersDemo'
import ListenerDemo from '../demo/ListenerDemo'
import UseCallBackHookDemo from '../hooks/UseCallBackHookDemo';
import UseCallBackHook2Demo from '../hooks/UseCallBackHook2Demo';
import UseMemoHookDemo from '../hooks/UseMemoHookDemo'
import UseMemoHookWithoutDemo from '../hooks/UseMemoHookWithoutDemo';
import UseReducerHookDemo from '../hooks/UseReducerHookDemo';

const MainNavigator  = () => {
  const Stack = createStackNavigator();
  return (
       <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="UseReducerHookDemo" component={UseReducerHookDemo} />
        <Stack.Screen name="UseMemoHookDemo" component={UseMemoHookDemo} />
        <Stack.Screen name="UseMemoHookWithoutDemo" component={UseMemoHookWithoutDemo} />
        <Stack.Screen name="UseCallBackHook2Demo" component={UseCallBackHook2Demo} />
        <Stack.Screen name="UseCallBackHookDemo" component={UseCallBackHookDemo} />
        <Stack.Screen name="ListenerDemo" component={ListenerDemo} />
        <Stack.Screen name="TimersDemo" component={TimersDemo} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="UseEffectHook" component={UseEffectHookDemo} />
        <Stack.Screen name="UseContextHook" component={UseContextHookDemo} />
        <Stack.Screen name="UseRefHook" component={UseRefHookDemo} />
        <Stack.Screen name="UseStateHook" component={UseStateHookDemo} />
        <Stack.Screen name="HooksIntro" component={HooksIntroScreen} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
   );
};

export default MainNavigator;
