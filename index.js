/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-reanimated';
import FunctionalComponent from './src/components/FunctionalComponent';
AppRegistry.registerComponent(appName, () => FunctionalComponent);
