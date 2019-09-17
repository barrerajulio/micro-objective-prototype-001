import React, {PureComponent, ReactNode} from 'react';

import {ActivityStackNavigator} from '../../../../navigators/ActivityStack.navigator';
import {NavigationScreenProps} from 'react-navigation';

export class ActivityScreen extends PureComponent<NavigationScreenProps> {
  static router = ActivityStackNavigator.router;

  public render(): ReactNode {
    return <ActivityStackNavigator navigation={this.props.navigation} />;
  }
}
