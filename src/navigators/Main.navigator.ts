import {createStackNavigator} from 'react-navigation-stack';

import {ActivityScreen} from '../screens/private/ActivityScreens/ActivityScreen/Activity.screen';
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
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);
