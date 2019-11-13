import React from 'react';
import {Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashBoard from './ui/containers/DashBoard';
import Cart from './ui/containers/Cart';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    MENU: DashBoard,
    CART: Cart,
  },
  {
    initialRouteName: 'MENU',
    order: ['MENU', 'CART'],
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'rocket';
        if (routeName === 'MENU') {
          iconName = 'restaurant-menu';
        } else {
          iconName = 'shopping-cart';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
