import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const UseMemoHookWithoutDemo = () => {
  const [counter1,setCounter1] = useState(0);
  const [counter2,setCounter2] = useState(0);

  const calculateValue = (x)=>{
    Alert.alert("Expensive calculation running")
    return x*3
  }

  // ❌ Problem: Without useMemo
  // calculateValue(counter2) ko directly call kiya hai
  // Iska matlab har baar component re-render hoga,
  // chahe counter1 change ho ya counter2. 
  // Yani jab bhi counter1 increment hoga, expensive calculation firse chalegi
  // aur Alert har render me dikhega, jo performance aur UX ke liye kharab hai.
  const calculatedValue = calculateValue(counter2)

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>With useMemo Hook</Text>
      <Text>Counter 1:{counter1}</Text>
      <Text>Counter 2:{counter2}</Text>
      <Text>{calculatedValue}</Text>
      <Button title='Increment Counter 1' onPress={()=>setCounter1(counter1+1)}/>
      <Button title='Increment Counter 2' onPress={()=>setCounter2(counter2+1)}/>
    </View>
  )
}

export default UseMemoHookWithoutDemo
