/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TabNavigator from './App/routes';
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TabNavigator);
