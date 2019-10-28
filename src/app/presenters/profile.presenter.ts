import {injectable} from 'inversify';

import {ProfileDto} from '../dtos/profile.dto';

@injectable()
export class ProfilePresenter {
  public profile!: ProfileDto;

  public get fullName(): string {
    return [
      this.profile.name,
      this.profile.secondName,
      this.profile.firstLastName,
      this.profile.secondLastName,
    ].join(' ');
  }
}
