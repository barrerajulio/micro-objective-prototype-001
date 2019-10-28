import {injectable} from 'inversify';
import {ProfilePresenter} from '../presenters/profile.presenter';
import {inject} from '../decorators/inject.decorator';
import {Symbols} from '../../symbols';

@injectable()
export class ProfileDto {
  public username!: string;
  public name!: string;
  public secondName!: string;
  public firstLastName!: string;
  public secondLastName!: string;

  @inject(Symbols.ProfilePresenter)
  public presenter!: ProfilePresenter;

  public constructor() {
    this.presenter.profile = this;
  }
}
