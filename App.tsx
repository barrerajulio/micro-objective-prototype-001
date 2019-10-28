import 'reflect-metadata';
import React, {PureComponent, ReactNode} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/reducers';

const middleware = applyMiddleware(reduxThunk);
const store = createStore(reducers, {}, middleware);

import {createAppContainer} from 'react-navigation';
import {IocContext} from './src/contexts/Ioc.context';
import {MainNavigator} from './src/navigators/Main.navigator';

export class App extends PureComponent {
  public render(): ReactNode {
    const MainNavigatorAppContainer = createAppContainer(MainNavigator);
    return (
      <Provider store={store}>
        <IocContext.Provider value={{}}>
          <MainNavigatorAppContainer />
        </IocContext.Provider>
      </Provider>
    );
  }
}
