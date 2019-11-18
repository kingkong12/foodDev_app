import React from 'react';
import {Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from 'react-navigation-stack';

import DashBoard from './ui/containers/DashBoard';
import Cart from './ui/containers/Cart';
import Information from './ui/organism/Information';

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
        let iconName;
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

const RootStack = createStackNavigator(
  {
    Main: TabNavigator,
    MyModal: Information,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
