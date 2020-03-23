import {Provider} from 'react-redux';
import React from 'react';
import {AppRegistry} from 'react-native';
import TabNavigator from './App/routes';
import configureStore from './App/Reducers/index.js';
import {name as ProjectName} from './app.json';

const redux = () => (
  <Provider store={configureStore()}>
    <TabNavigator />
  </Provider>
);
AppRegistry.registerComponent(ProjectName, () => redux);
