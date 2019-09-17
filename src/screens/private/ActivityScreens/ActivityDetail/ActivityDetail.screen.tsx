import React, {PureComponent, ReactNode} from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {Text, TouchableOpacity} from 'react-native';

export class ActivityDetailScreen extends PureComponent<NavigationScreenProps> {
  public render(): ReactNode {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ActivityListScreen')}>
        <Text>Ir al listado de actividades</Text>
      </TouchableOpacity>
    );
  }
}
