import { View, Text, Button } from 'react-native'
import React, { useReducer } from 'react'

const initialState = {count:0}

const reducer = (state,action)=>{
  switch(action.type){
    case 'increment' :
     return {count:state.count+1}
    case 'decrement' :
     return {count:state.count-1}
  }
}
const UseReducerHookDemo = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>{state.count}</Text>
      <Button title='increment' onPress={()=>dispatch({type:"increment"})}/>
      <Button title='decrement' onPress={()=>dispatch({type:"decrement"})}/>
    </View>
  )
}

export default UseReducerHookDemo