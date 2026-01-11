import { useState } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
 
const UseStateHookDemo = () => {
  const [color,setColor]=useState('cyan')
  const [switchOn,setSwitchOn]=useState(false)
  const [user,setUser]=useState({
    name:"Himanshu Sinha",
    email:"himanshusinha011@gmail.com",
    age:35
  })
  return (
    <SafeAreaView style={styles.container}>
    <View style={[styles.box,{backgroundColor:color}]} >
    <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Age: {user.age}</Text>  
      <Text>{switchOn?"on":"off"}</Text>
    </View>
    <Button title='Change Color' onPress={()=>{setUser({
      ...user,
      age:user.age+1
    })}}/>
    <Button title='Switch' onPress={()=>setSwitchOn(!switchOn)}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
      box:{
        width:200,
        height:200,
        marginBottom:20,
        padding:10
      },
    })
export default UseStateHookDemo