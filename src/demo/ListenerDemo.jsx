import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const OrientationListener = () => {
  const [orientation, setOrientation] = useState('Portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      const {width, height} = Dimensions.get('window');
      setOrientation(width > height ? 'Landscape' : 'Portrait');
    };

    const subscription = Dimensions.addEventListener(
      'change',
      handleOrientationChange,
    );

    return () => {
      subscription.remove(); // Cleanup
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Orientation: {orientation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrientationListener;