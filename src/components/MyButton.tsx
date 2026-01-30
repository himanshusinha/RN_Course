import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MyButtonProps } from '../types/types';

const MyButton: React.FC<MyButtonProps> = ({
  title,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
