import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, View } from 'react-native';
import React from 'react';

import SearchIcon from '../assets/images/search.png';
import ProfileIcon from '../assets/images/profile.png';

const CustomDrawerContent = (props) => {
  const { navigation, state } = props;

  const currentRoute = state.routeNames[state.index];

 const renderDrawerItem = (label, routeName, iconSource) => {
  const focused = currentRoute === routeName;

  return (
    <DrawerItem
      label={label}
      onPress={() => navigation.navigate(routeName)}
      style={{
        backgroundColor: focused ? '#CD5C5C' : 'transparent',
        borderRadius: 8,
        marginHorizontal: 10,
      }}
      labelStyle={{
        color: focused ? '#fff' : '#000',
        fontWeight: focused ? '600' : '400',
      }}
      icon={() => (
        <Image
          source={iconSource}   
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#fff' : '#000',
          }}
        />
      )}
    />
  );
};


  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>

        {/* Profile Image */}
        <View
          style={{
            height: 140,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>

        {renderDrawerItem('Search', 'Search', SearchIcon)}
        {renderDrawerItem('Profile', 'Profile', ProfileIcon)}

      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
