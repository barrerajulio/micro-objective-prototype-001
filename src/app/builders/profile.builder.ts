import {get} from 'lodash';
import {injectable} from 'inversify';

import {inject} from '../decorators/inject.decorator';
import {ProfileDto} from '../dtos/profile.dto';
import {Symbols} from '../../symbols';

@injectable()
export class ProfileBuilder {
  @inject(Symbols.ProfileDto)
  private profile!: ProfileDto;

  public build(raw: any): ProfileDto {
    this.profile.username = get(raw, 'username', '');
    this.profile.name = get(raw, 'name', '');
    this.profile.secondName = get(raw, 'second_name', '');
    this.profile.firstLastName = get(raw, 'last_name', '');
    this.profile.secondLastName = get(raw, 'second_last_name', '');
    return this.profile;
  }
}
