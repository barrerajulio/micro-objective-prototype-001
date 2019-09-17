import React, {PureComponent, ReactNode} from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {Text, TouchableOpacity, View} from 'react-native';

export class HomeScreen extends PureComponent<NavigationScreenProps> {
  public render(): ReactNode {
    return (
      <View>
        <Text>Bienvenido a la aplicación&hellip;</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ActivityListScreen')}>
          <Text>Ir a listado de actividades</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
