import faker from 'faker';
import {injectable} from 'inversify';

import {
  IActivityAttributeRepository,
  IActivityAttributeResponse,
} from '../../interfaces/repositories';

@injectable()
export class ActivityAttributeDummyRepository
  implements IActivityAttributeRepository {
  public async findByActivityId(
    activityId: number,
  ): Promise<IActivityAttributeResponse[]> {
    const fakerItems = faker.random.number();
    return Promise.all(
      Array.from({length: fakerItems}).map(() => ({
        id: faker.random.number(),
      })),
    );
  }
}
