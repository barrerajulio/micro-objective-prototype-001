import 'reflect-metadata';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {Hello} from './src/Hello/Hello.component';

const App = () => {
  return (
    <SafeAreaView>
      <Hello />
    </SafeAreaView>
  );
};

export default App;
