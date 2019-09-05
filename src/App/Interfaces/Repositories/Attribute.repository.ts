export interface IAttributeResponse {
  id: number;
  name: string;
  description: string;
}

export interface IAttributeRepository {
  findByOneById(id: number): Promise<IAttributeResponse>;
}
