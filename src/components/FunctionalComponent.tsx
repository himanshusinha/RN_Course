import { View, Text, Alert } from 'react-native';
import React from 'react';
import MyButton from './MyButton';

const FunctionalComponent = () => {
  return (
    <View>
      <MyButton
        onPress={() => {
          Alert.alert('Hello');
        }}
        title="onClick"
      />
    </View>
  );
};

export default FunctionalComponent;
