import React, {Component, ReactNode} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

import * as userActions from './../../../actions/user.actions';
import {inject} from '../../../app/decorators/inject.decorator';
import {ProfileBuilder} from '../../../app/builders/profile.builder';
import {Symbols} from '../../../symbols';
import {styles} from '../../../screens/private/ActivityScreens/ActivityAdd/ActivityAddForm.style';

interface IActiviGroupClassProps {
  me?: any;
}

export class ActivityGroupClass extends Component<IActiviGroupClassProps> {
  @inject(Symbols.ProfileBuilder)
  private profileBuilder!: ProfileBuilder;

  public componentDidMount(): void {
    (this.props as any).getProfile();
  }

  public render(): ReactNode {
    const profile = this.profileBuilder.build(this.props.me);
    return (
      <>
        <Text style={{fontSize: 24}}>Bienvenidos</Text>
      </>
    );
  }
}

const mapStateToProps = (reducers: any) => {
  return reducers.userReducer;
};

export const ActivityGroup = connect(
  mapStateToProps,
  userActions,
)(ActivityGroupClass);
