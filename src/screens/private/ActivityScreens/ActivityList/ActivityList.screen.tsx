import React, {PureComponent, ReactNode} from 'react';
import {NavigationScreenProps, ScrollView} from 'react-navigation';
import {Text, TouchableOpacity} from 'react-native';

import {ActivityGroup} from '../../../../components/Activity/Group/ActivityGroup.component';

export class ActivityListScreen extends PureComponent<NavigationScreenProps> {
  public render(): ReactNode {
    return (
      <ScrollView>
        <ActivityGroup />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ActivityDetailScreen')
          }>
          <Text>Lorem ipsum dolor sit amet</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
