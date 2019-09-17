import 'reflect-metadata';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {ActivityGroup} from './src/components/Activity/Group/ActivityGroup.component';
import {IocContext} from './src/contexts/Ioc.context';

const App = () => {
  return (
    <IocContext.Provider value={{}}>
      <SafeAreaView>
        <ActivityGroup />
      </SafeAreaView>
    </IocContext.Provider>
  );
};

export default App;
