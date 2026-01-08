import React from 'react';
import { Image, View, Text, Platform } from 'react-native';
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

        // 🔥 IMPORTANT FIXES
        tabBarStyle: {
          height: 78,
          paddingBottom: Platform.OS === 'ios' ? 16 : 10,
        },

        tabBarItemStyle: {
          width: 'auto',   // 👈 allows full text width
        },

        tabBarIcon: ({ focused }) => {
          let iconSource;
          let label;

          if (route.name === 'Add') {
            iconSource = require('../assets/images/plus.png');
            label = 'Add';
          } else if (route.name === 'Fav') {
            iconSource = require('../assets/images/favourite.png');
            label = 'Favourite';
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={iconSource}
                style={{
                  width: focused ? 28 : 24,
                  height: focused ? 28 : 24,
                  tintColor: focused ? 'tomato' : 'black',
                  resizeMode: 'contain',
                }}
              />
 
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Add" component={AddPostScreen} />
      <Tab.Screen name="Fav" component={FavouriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
