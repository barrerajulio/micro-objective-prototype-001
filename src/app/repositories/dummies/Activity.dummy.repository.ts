import faker from 'faker';
import {injectable} from 'inversify';

import {
  IActivityRepository,
  IActivityResponse,
} from '../../interfaces/repositories';

@injectable()
export class ActivityDummyRepository implements IActivityRepository {
  public async findByRoutineId(
    routineId: number,
  ): Promise<IActivityResponse[]> {
    const fakerItems = faker.random.number({min: 1, max: 100});
    return Promise.all(
      Array.from({length: fakerItems}).map(() => ({
        id: faker.random.number(),
        name: faker.lorem.word(),
        description: faker.lorem.text(),
      })),
    );
  }
}
