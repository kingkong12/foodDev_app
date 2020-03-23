import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from 'react-navigation-stack';

import DashBoard from './ui/containers/DashBoard';
import Cart from './ui/containers/Cart';
import Information from './ui/organism/Information';
import ViewOrder from './ui/organism/ViewOrder.js';
import AdminBoard from './ui/containers/AdminBoard';
import AddINewtem from './ui/organism/addItem';

const Navigation = createBottomTabNavigator(
  {
    //these are 2 important screen in our app.
    MENU: DashBoard,
    CART: Cart,
    ADMIN: AdminBoard,
  },
  {
    initialRouteName: 'MENU',
    order: ['MENU', 'CART', 'ADMIN'],
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'MENU') {
          iconName = 'restaurant-menu';
        } else if (routeName === 'ADMIN') {
          iconName = 'lock';
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
    Main: Navigation,
    MyModal: Information,
    ViewOrder: ViewOrder,
    addItem: AddINewtem,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
