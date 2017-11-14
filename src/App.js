import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';

import Navigation from './Navigation';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
