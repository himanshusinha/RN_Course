import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// useCallback function ko memoize karta hai taaki har re-render par
// naya function create na ho, jisse child components aur effects
// unnecessarily re-run na hon

/* 
 useCallback mainly 2 cases me use hota hai:
 1) Jab function useEffect ke dependency array me ho
 2) Jab function ko child component ko props ke roop me pass kiya jaye
*/
const Child = React.memo(({handleClick}) => {
  console.log('Child re-rendered');
  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>Increment</Text>
    </TouchableOpacity>
  );
});

const UseCallBackHook2Demo = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  // Function gets recreated on every render
  const handleClick = useCallback(() => {
    console.log('handle click');
    setCount(prev => prev + 1);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Child handleClick={handleClick} />
      <TouchableOpacity style={styles.button} onPress={() => setTheme(!theme)}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseCallBackHook2Demo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});