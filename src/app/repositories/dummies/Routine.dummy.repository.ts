import faker from 'faker';
import {injectable} from 'inversify';

import {
  IActivityRepository,
  IActivityResponse,
} from '../../interfaces/repositories/Activity.repository';
import {injectProperty} from './../../../ioc';
import {
  IRoutineRepository,
  IRoutineResponse,
} from './../../interfaces/repositories/Routine.repository';
import {Symbols} from './../../../symbols';

@injectable()
export class RoutineDummyRepository implements IRoutineRepository {
  // @injectProperty(Symbols.IActivityRepository)
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
