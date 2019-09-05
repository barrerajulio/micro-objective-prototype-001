import getDecorators from 'inversify-inject-decorators';
import {Container, interfaces} from 'inversify';

const Decorators = getDecorators(new Container(), false);

interface IBabelPropertyDescriptor extends PropertyDescriptor {
  initializer(): any;
}

const injectProperty = function(
  serviceIdentifier: interfaces.ServiceIdentifier<any>,
) {
  const original = Decorators.lazyInject(serviceIdentifier);
  // the 'descriptor' parameter is actually always defined for class fields for Babel, but is considered undefined for TSC
  // so we just hack it with ?/! combination to avoid "TS1240: Unable to resolve signature of property decorator when called as an expression"
  return function(
    this: any,
    proto: any,
    key: string,
    descriptor?: IBabelPropertyDescriptor,
  ): void {
    // make it work as usual
    original.call(this, proto, key);
    // return link to proto, so own value wont be 'undefined' after component's creation
    descriptor!.initializer = function() {
      return proto[key];
    };
  };
};

export {injectProperty};
