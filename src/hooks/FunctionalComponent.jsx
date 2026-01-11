import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const FunctionalComponent = () => {
  const [count,setCount] = useState(0);
  return (
    <View>
      <Text>FunctionalComponent</Text>
      <Button title='Count' onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default FunctionalComponent