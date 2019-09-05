import faker from 'faker';

import {
  IActivityRepository,
  IActivityResponse,
} from '../../Interfaces/Repositories';

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
