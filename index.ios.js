import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class ChatReactNative extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('ChatReactNative', () => ChatReactNative);
