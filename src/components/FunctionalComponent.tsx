import { StyleSheet, Text } from 'react-native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from './MyButton';

const FunctionalComponent: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyButton
        title="Press"
        textStyle={styles.textStyle}
        style={styles.buttonStyle}
        onPress={() => console.log('Press')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '50%',
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: { color: 'white' },
});
export default FunctionalComponent;
