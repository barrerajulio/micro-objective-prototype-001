import {injectable} from 'inversify';

export interface IProvider {
  provide(): string;
}

@injectable()
export class NameProvider implements IProvider {
  public provide(): string {
    return 'World';
  }
}
