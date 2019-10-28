import React from 'react';

import {
  ActivityAttributeDummyRepository,
  ActivityDummyRepository,
  AttributeDummyRepository,
  RoutineDummyRepository,
} from '../app';
import {getContainer} from '../app/ioc';
import {ProfileBuilder} from '../app/builders/profile.builder';
import {ProfileDto} from '../app/dtos/profile.dto';
import {Symbols} from '../symbols';
import {ProfilePresenter} from '../app/presenters/profile.presenter';

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
container.bind(Symbols.ProfileBuilder).to(ProfileBuilder);
container.bind(Symbols.ProfileDto).to(ProfileDto);
container.bind(Symbols.ProfilePresenter).to(ProfilePresenter);

export const IocContext = React.createContext({});
