import { Text, View } from 'react-native'
import React from 'react'
 
const data = ['small text','medium text length','short text','very very long text']
const FlexDemo = () => {
  return (
        <View style={{flexWrap:'wrap',flexDirection:'row'}}>
            {data.map((item)=>{
            return(
            <View key={item} style={{backgroundColor:'orange',padding:10,margin:10}}>
                <Text>{item}</Text>
            </View>)
        })}
        </View>
  )
}

export default FlexDemo


//flex-direction
//justify-content -- align child component (column default - top - bottom) same layout direction
//alignItems -- align child component // opposite direction
// alignItems : "strech" row me chahiye to height set karna padti hai width nahi
// alignItems : "strech" column me chahiye to width set karna padti hai height nahi
// alignItems : "baseline" text ka baseline align karta hai.
//alignSelf -- component khud ko align karta hai 
//flexWrap. -- child align // lagta parent per hai 