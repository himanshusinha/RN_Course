import { Button, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ScreenB = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { name, email, onGoBack } = route.params || {}

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>{name}</Text>
      <Text>{email}</Text>

      <Button
        title="Go Back"
        onPress={() => {
          if (onGoBack) {
            onGoBack({
              name,
              email,
            })
          }
          navigation.goBack()
        }}
      />
    </View>
  )
}

export default ScreenB
