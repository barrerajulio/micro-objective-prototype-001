import faker from 'faker';
import {injectable} from 'inversify';

import {
  IAttributeRepository,
  IAttributeResponse,
} from '../../interfaces/repositories';

@injectable()
export class AttributeDummyRepository implements IAttributeRepository {
  public async findByOneById(id: number): Promise<IAttributeResponse> {
    return {
      id,
      name: faker.lorem.word(),
      description: faker.lorem.text(),
    };
  }
}
