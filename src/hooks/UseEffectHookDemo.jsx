import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookDemo = () => {
  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2] = useState(0)

  useEffect(()=>{
    console.log("every time")
  }) // every time

        useEffect(()=>{
          console.log("one time")
        },[]) // one time 

  useEffect(()=>{
        console.log("conditional time")
  },[counter1])// change on dependency
  return (
    <View style={styles.container}>
       <Text style={styles.counterTitle}>Counter 1 :{counter1}</Text>
       <TouchableOpacity style={styles.button} onPress={()=>setCounter1(counter1+1)}>
        <Text style={styles.title}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>setCounter1(counter1-1)}>
        <Text style={styles.title}>Decrement</Text>
      </TouchableOpacity>

        <Text style={styles.counterTitle}>Counter 2 : {counter2}</Text>
       <TouchableOpacity style={styles.button} onPress={()=>setCounter2(counter2+1)}>
        <Text style={styles.title}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>setCounter2(counter2-1)}>
        <Text style={styles.title}>Decrement</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:'60%',
    backgroundColor:"#0096FF",
    padding:10,
    justifyContent:'center',alignItems:'center',
    marginBottom:10
  },
  title:{
    color:'white'
  },
  counterTitle:{
    marginBottom:10
  }
})
export default UseEffectHookDemo

//side effects
//api calling
//listeners
//resources clean up
//timers handling