import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import Information from './ui/components/Information';
import Cart from './ui/components/Cart';
import DashBoard from './ui/components/DashBoard';
import ViewOrder from './ui/components/ViewOrder';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
          routeName === 'MEDICINES' ? 'local-pharmacy' : 'shopping-basket';
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
    medicineInformation: Information,
    ViewOrder: ViewOrder,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(nestedStack);
