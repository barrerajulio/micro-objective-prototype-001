import getDecorators from 'inversify-inject-decorators';
import {interfaces} from 'inversify';

import {getContainer} from '../ioc';

interface IBabelPropertyDescriptor extends PropertyDescriptor {
  initializer(): any;
}

export const inject = function(
  serviceIdentifier: interfaces.ServiceIdentifier<any>,
) {
  const decorators = getDecorators(getContainer());
  const originalService = decorators.lazyInject(serviceIdentifier);
  // the 'descriptor' parameter is actually always defined for class fields for Babel, but is considered undefined for TSC
  // so we just hack it with ?/! combination to avoid "TS1240: Unable to resolve signature of property decorator when called as an expression"
  return function(
    this: any,
    proto: any,
    key: string,
    descriptor?: IBabelPropertyDescriptor,
  ): void {
    // make it work as usual
    originalService.call(this, proto, key);
    // return link to proto, so own value wont be 'undefined' after component's creation
    descriptor!.initializer = function() {
      return proto[key];
    };
  };
};
