import React from 'react';
import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawerContent = (props) => {
  const { navigation, state } = props;

  const currentRoute = state.routeNames[state.index];

  const renderDrawerItem = (label, routeName, iconName) => {
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
        icon={({ size }) => (
          <Icon
            name={iconName}
            size={size}
            color={focused ? '#fff' : '#000'}
          />
        )}
      />
    );
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
                <View
          style={{
            height: 140,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/150' }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>

        {renderDrawerItem('Home', 'Home', 'home')}
        {renderDrawerItem('Bookmark', 'Bookmark', 'bookmark')}
        {renderDrawerItem('My Account', 'MyAccount', 'person')}
        {renderDrawerItem('Rules', 'Rules', 'rule')}

      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
