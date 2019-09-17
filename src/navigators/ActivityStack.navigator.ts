import {createStackNavigator} from 'react-navigation-stack';

import {ActivityDetailScreen} from '../screens/private/ActivityScreens/ActivityDetail/ActivityDetail.screen';
import {ActivityListScreen} from '../screens/private/ActivityScreens/ActivityList/ActivityList.screen';

export const ActivityStackNavigator = createStackNavigator(
  {
    ActivityListScreen: {
      screen: ActivityListScreen,
      navigationOptions: {
        title: 'Listado de actividades',
      },
    },
    ActivityDetailScreen: {
      screen: ActivityDetailScreen,
      navigationOptions: {
        title: 'Detalle de actividad',
      },
    },
  },
  {
    initialRouteName: 'ActivityListScreen',
  },
);
