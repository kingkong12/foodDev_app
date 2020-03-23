import {Provider} from 'react-redux';
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './App/routes';
import configureStore from './App/Reducers/index.js';
import {name as ProjectName} from './app.json';

const redux = () => (
  <Provider store={configureStore()}>
    <Navigation />
  </Provider>
);
AppRegistry.registerComponent(ProjectName, () => redux);
