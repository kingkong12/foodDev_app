import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cart from './ui/containers/Cart';
import AddINewtem from './ui/organism/addItem';
import DashBoard from './ui/containers/DashBoard';
import ViewOrder from './ui/organism/ViewOrder.js';
import Information from './ui/organism/Information';

const Navigation = createBottomTabNavigator(
  {
    MEDICINES: DashBoard,
    BASKET: Cart,
  },
  {
    order: ['MEDICINES', 'BASKET'],
    initialRouteName: 'MEDICINES',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconImage;
        iconImage =
          routeName === 'MEDICINES' ? 'restaurant-menu' : 'shopping-cart';
        return <Icon size={35} color={tintColor} name={iconImage} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0681C7',
      inactiveTintColor: 'gray',
    },
  },
);

const nestedStack = createStackNavigator(
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

export default createAppContainer(nestedStack);
