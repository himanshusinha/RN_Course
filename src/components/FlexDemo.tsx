import { Text, View } from 'react-native'
import React from 'react'

const FlexDemo = () => {
  return (
    <View
      style={{
        alignItems: 'baseline',
        backgroundColor: 'white',
        padding: 20,
      }}
    >
      <View style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 16 }}>Hello</Text>
      </View>

      <View style={{ backgroundColor: 'orange' }}>
        <Text style={{ fontSize: 28 }}>Helloasdasd</Text>
      </View>

      <View style={{ backgroundColor: 'yellow' }}>
        <Text style={{ fontSize: 40 }}>Helloasdasd</Text>
      </View>

      <View style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20 }}>Helloasdasdasdasd</Text>
      </View>
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
//flexWrap. -- child align