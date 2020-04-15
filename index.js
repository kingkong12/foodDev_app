/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TabNavigator from './App/routes';
import React from 'react';
//import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import configureStore from './App/Reducers/index.js';
const store = configureStore();

const RNRedux = () => (
  <PaperProvider>
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
