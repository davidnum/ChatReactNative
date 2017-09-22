import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import registerSagas from './rootSaga';

import Navigation from './Navigation';

const sagaMiddlware = createSagaMiddleware();
registerSagas(sagaMiddlware);
const store = createStore(rootReducer, applyMiddleware(sagaMiddlware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
