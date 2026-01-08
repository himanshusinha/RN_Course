import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import BottomTabNavigator from './src/navigation/BottomTabNavigator'

export default function App() {
  return (
    <NavigationContainer>
       <BottomTabNavigator/>
    </NavigationContainer>
  );
}