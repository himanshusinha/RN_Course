import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
 
const FlexDemo = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{width:100,height:100,backgroundColor:'orange',alignSelf:'flex-end'}}></View>
    </SafeAreaView>
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
//flexWrap. -- child align