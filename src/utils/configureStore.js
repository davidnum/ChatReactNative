import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../rootReducer';
import registerSagas from '../rootSaga';

export default () => {
  const sagaMiddlware = createSagaMiddleware();
  registerSagas(sagaMiddlware);
  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddlware));
  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('../rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
