import {IActivityResponse} from './Activity.repository';
import {IAttributeResponse} from './Attribute.repository';

export interface IActivityAttributeResponse {
  id: number;
  activity?: IActivityResponse;
  attribute?: IAttributeResponse;
}

export interface IActivityAttributeRepository {
  findByActivityId(activityId: number): Promise<IActivityAttributeResponse[]>;
}
