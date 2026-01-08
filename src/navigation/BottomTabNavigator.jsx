import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddPostScreen from '../screens/AddPostScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

         if (route.name === 'AddPostScreen') {
            iconSource = require('../assets/images/plus.png');
          } else if (route.name === 'FavouriteScreen') {
            iconSource = require('../assets/images/favourite.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: focused ? 28 : 24,
                height: focused ? 28 : 24,
                tintColor: focused ? 'tomato' : 'black',
                resizeMode: 'contain',
              }}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="AddPostScreen" component={AddPostScreen} />
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
