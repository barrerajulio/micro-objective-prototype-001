import {IActivityResponse} from './Activity.repository';

export interface IRoutineResponse {
  id: number;
  name: string;
  activities?: IActivityResponse[];
}

export interface IRoutineRepository {
  findOneById(id: number): Promise<IRoutineResponse>;
  findOneByIdWithActivities(
    id: number,
  ): Promise<IRoutineResponse & {activities: IActivityResponse[]}>;
}
