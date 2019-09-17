import React, {PureComponent, ReactNode} from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {Text, TouchableOpacity} from 'react-native';

export class ActivityListScreen extends PureComponent<NavigationScreenProps> {
  public render(): ReactNode {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ActivityDetailScreen')}>
        <Text>Ir al detalle</Text>
      </TouchableOpacity>
    );
  }
}
