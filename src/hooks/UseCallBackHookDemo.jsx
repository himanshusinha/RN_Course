import React, {useState, useEffect, useCallback} from 'react';
import {Button,  Text,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UseCallbackHook = () => {
// useCallback function ko memoize karta hai taaki har re-render par
// naya function create na ho, jisse child components aur effects
// unnecessarily re-run na hon

/* 
 useCallback mainly 2 cases me use hota hai:
 1) Jab function useEffect ke dependency array me ho
 2) Jab function ko child component ko props ke roop me pass kiya jaye
*/
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    console.log('Fetching data...');
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increment" />
    </SafeAreaView>
  );
};

export default UseCallbackHook;