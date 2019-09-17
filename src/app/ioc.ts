import {Container} from 'inversify';

let container: Container;

const getContainer = () => {
  if (container instanceof Container === false) {
    container = new Container();
  }
  return container;
};

export {getContainer};
