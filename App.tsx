import 'reflect-metadata';
import React, {PureComponent, ReactNode} from 'react';

import {createAppContainer} from 'react-navigation';
import {IocContext} from './src/contexts/Ioc.context';
import {MainNavigator} from './src/navigators/Main.navigator';

export class App extends PureComponent {
  public render(): ReactNode {
    const MainNavigatorAppContainer = createAppContainer(MainNavigator);
    return (
      <IocContext.Provider value={{}}>
        <MainNavigatorAppContainer />
      </IocContext.Provider>
    );
  }
}
