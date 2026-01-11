import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseRefHookDemo = () => {
  const [count,setCount]=useState(0);
  const [previousCount,setPreviousCount]=useState(null);
  const previousRef = useRef(null)
  const inputRef1 = useRef()
  const inputRef2 = useRef()
  const[timer,setTimer] = useState(0)
  const intervalRef = useRef(0)
  
  // without useRef ke component re-render hoga baar baar jisse value same milegi
  // useEffect(()=>{
  //  setPreviousCount(count)
  // },[count])

  // useRef help se value store kar sakte hai
  useEffect(()=>{
    previousRef.current=count;
  },[count])

  // useEffect(()=>{
  //  const interval = setInterval(()=>{
  //   setTimer(prev=>prev+1)
  //  },1000)

  //  return()=>clearInterval(interval)
  // },[count])

  // to avoid unneccessary re-renders
  useEffect(()=>{
  intervalRef.current = setInterval(()=>{
    setTimer(prev=>prev+1)
   },1000)

   return()=>clearInterval(intervalRef.current)
  },[count])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>count : {`count : ${count}`}</Text>
      <Text>previous count : {`previous count : ${previousCount}`}</Text>
      <Text>previous count : {previousRef.current}</Text>
      
      {/* <Button title='Change Count' onPress={()=>setCount(count+1)}/> */}

      <TextInput ref={inputRef1} style={{width:'90%',height:50,borderWidth:1,marginTop:20}}/>
      <TextInput ref={inputRef2} style={{width:'90%',height:50,borderWidth:1,marginTop:20}}/>

      <Button title='Focus input' onPress={()=>inputRef2.current.focus()}/>
      <Button title='Stop Timer' onPress={()=>clearInterval(intervalRef.current)}/>

      {/* <Text>{`timer : ${timer}`}</Text> */}
      <Text>{`timer : ${timer}`}</Text>

    </View>
  )
}

export default UseRefHookDemo

/* 
useRef React ka ek hook hai jo component ke andar
kisi value ya kisi native component ka reference store karta hai
bina component ko re-render kiye

useRef ek aisa hook hai jo value ya component ka reference hold karta hai bina component ko re-render kiye.

*/