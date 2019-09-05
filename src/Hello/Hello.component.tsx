import React, {Component, ReactNode} from 'react';
import {Text} from 'react-native';

import {injectProperty} from '../ioc';
import {IProvider} from '../providers.remove';
import {Symbols} from '../symbols';

export class Hello extends Component {
  @injectProperty(Symbols.IProvider) public nameProvider!: IProvider;

  public render(): ReactNode {
    return <Text>Hola {this.nameProvider.provide()}</Text>;
  }
}
