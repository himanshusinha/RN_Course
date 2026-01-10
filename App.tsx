import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import BottomTabNavigator from './src/navigation/BottomTabNavigator'
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
}