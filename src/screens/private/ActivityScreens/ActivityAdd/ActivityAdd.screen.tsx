import React, {PureComponent, ReactNode} from 'react';
import {Formik} from 'formik';

import {ActivityAddForm, IActivityAddValues} from './ActivityAddForm.component';
import {ActivityAddSchema} from './ActivityAdd.schema';

export class ActivityAddScreen extends PureComponent {
  public render(): ReactNode {
    return (
      <Formik
        component={ActivityAddForm}
        onSubmit={this.onSubmit}
        initialValues={{complexity: 0, name: ''}}
        validationSchema={ActivityAddSchema}
      />
    );
  }

  private onSubmit(values: IActivityAddValues): void {
    console.log(values);
  }
}
