import React, {PureComponent, ReactNode} from 'react';
import {FormikFormProps, InjectedFormikProps} from 'formik';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './ActivityAddForm.style';

export interface IActivityAddValues {
  name: string;
  complexity: number;
}

interface IActivityAddFormProps
  extends InjectedFormikProps<FormikFormProps, IActivityAddValues> {}

export class ActivityAddForm extends PureComponent<IActivityAddFormProps> {
  public render(): ReactNode {
    return (
      <>
        <TextInput
          onChangeText={this.props.handleChange('name')}
          placeholder="Comienza a escribir&hellip;"
          value={this.props.values.name}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Complejidad"
          onChangeText={this.props.handleChange('complexity')}
          value={this.props.values.complexity.toString()}
        />
        <TouchableOpacity
          style={[
            styles.button,
            this.props.isValid === false
              ? styles.buttonDisable
              : styles.buttonEnable,
          ]}
          onPress={() => this.props.submitForm()}>
          <Text
            style={[
              styles.label,
              this.props.isValid ? styles.labelEnable : null,
            ]}>
            Enviar
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}
