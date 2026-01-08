import { Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ScreenA = () => {
  const navigation = useNavigation()

  const onDataBack = (data) => {
    // ScreenB se aaya data
    console.log('Received back:', data)
  }

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button
        title="Go to Screen B"
        onPress={() =>
          navigation.navigate('ScreenB', {
            name: 'Himanshu Sinha',
            email: 'himanshusinha011@gmail.com',
            onGoBack: onDataBack, 
          })
        }
      />
    </View>
  )
}

export default ScreenA
