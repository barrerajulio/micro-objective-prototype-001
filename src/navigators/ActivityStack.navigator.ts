import {createStackNavigator} from 'react-navigation-stack';

import {ActivityAddScreen} from '../screens/private/ActivityScreens/ActivityAdd/ActivityAdd.screen';
import {ActivityDetailScreen} from '../screens/private/ActivityScreens/ActivityDetail/ActivityDetail.screen';
import {ActivityListScreen} from '../screens/private/ActivityScreens/ActivityList/ActivityList.screen';

export const ActivityStackNavigator = createStackNavigator(
  {
    ActivityAddScreen: {
      screen: ActivityAddScreen,
      navigationOptions: {
        title: 'Añadir actividad',
      },
    },
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
    initialRouteName: 'ActivityAddScreen',
  },
);
