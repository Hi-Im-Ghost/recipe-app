/**
 * @format
 */
import 'react-native-gesture-handler';
import Animated, { runOnUI } from 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
