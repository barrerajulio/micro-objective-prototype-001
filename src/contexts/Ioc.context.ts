import React from 'react';

import {
  ActivityAttributeDummyRepository,
  ActivityDummyRepository,
  AttributeDummyRepository,
  RoutineDummyRepository,
} from '../app';
import {getContainer} from '../app/ioc';
import {Symbols} from '../symbols';

const container = getContainer();
container
  .bind(Symbols.IActivityAttributeRepository)
  .to(ActivityAttributeDummyRepository)
  .inSingletonScope();
container
  .bind(Symbols.IActivityRepository)
  .to(ActivityDummyRepository)
  .inSingletonScope();
container
  .bind(Symbols.IAttributeRepository)
  .to(AttributeDummyRepository)
  .inSingletonScope();
container
  .bind(Symbols.IRoutineRepository)
  .to(RoutineDummyRepository)
  .inSingletonScope();

export const IocContext = React.createContext({});
