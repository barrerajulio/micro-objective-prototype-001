import faker from 'faker';

import {
  IAttributeRepository,
  IAttributeResponse,
} from '../../Interfaces/Repositories';

export class AttributeDummyRepository implements IAttributeRepository {
  public async findByOneById(id: number): Promise<IAttributeResponse> {
    return {
      id,
      name: faker.lorem.word(),
      description: faker.lorem.text(),
    };
  }
}
