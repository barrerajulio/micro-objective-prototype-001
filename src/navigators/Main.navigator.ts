import {createStackNavigator} from 'react-navigation-stack';

import {ActivityScreen} from '../screens/private/ActivityScreens/Activity/Activity.screen';
import {HomeScreen} from '../screens/public/Home/Home.screen';

export const MainNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Inicio',
      },
    },
    ActivityScreen: {
      screen: ActivityScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);
