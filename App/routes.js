import React from 'react';
import {Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <Icon name="rocket" size={44} />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Menu: {screen: HomeScreen},
  Orders: {screen: SettingsScreen},
  Profile: {screen: HomeScreen},
});

export default createAppContainer(TabNavigator);
