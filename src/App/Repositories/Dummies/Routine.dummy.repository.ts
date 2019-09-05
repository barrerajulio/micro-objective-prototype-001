import faker from 'faker';

import {
  IActivityRepository,
  IActivityResponse,
} from '../../Interfaces/Repositories/Activity.repository';
import {injectProperty} from './../../../ioc';
import {
  IRoutineRepository,
  IRoutineResponse,
} from './../../Interfaces/Repositories/Routine.repository';
import {Symbols} from './../../../symbols';

export class RoutineDummyRepository implements IRoutineRepository {
  @injectProperty(Symbols.IActivityRepository)
  private activityRepository!: IActivityRepository;

  public async findOneById(id: number): Promise<IRoutineResponse> {
    return {
      id,
      name: faker.lorem.word(),
    };
  }

  public async findOneByIdWithActivities(
    id: number,
  ): Promise<IRoutineResponse & {activities: IActivityResponse[]}> {
    return {
      ...(await this.findOneById(id)),
      activities: await this.activityRepository.findByRoutineId(id),
    };
  }
}
