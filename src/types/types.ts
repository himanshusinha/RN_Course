import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type User = {
  id: number;
  name: string;
};

export type MyButtonProps = {
  onPress: () => void;
  title: string;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
};
