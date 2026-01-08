import { useNavigation } from '@react-navigation/native'
import { View, Button } from 'react-native' 
const ScreenC = () => {
    const navigation = useNavigation()
   return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Button title='Go Back To A' onPress={() => navigation.popToTop()}/>
    </View>
  )
}

export default ScreenC