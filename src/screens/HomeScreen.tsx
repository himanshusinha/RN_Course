import { View, Text } from 'react-native';
import React, { FC } from 'react';
import ClassComponent from '../components/ClassComponent';
import FunctionalComponent from '../components/FunctionalComponent';

const HomeScreen: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <ClassComponent /> */}
      <FunctionalComponent />
    </View>
  );
};

export default HomeScreen;
