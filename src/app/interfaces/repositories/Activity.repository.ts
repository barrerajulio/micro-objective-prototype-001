import {IActivityAttributeResponse} from './ActivityAttribute.repository';

/**
 * @todo Analyze if is the best method returns an array of attributes or is best returns a response with
 * attributes list
 * @export
 */
export interface IActivityResponse {
  id: number;
  name: string;
  description: string;
  attributes?: IActivityAttributeResponse[];
}

export interface IActivityRepository {
  findByRoutineId(routineId: number): Promise<IActivityResponse[]>;
}
