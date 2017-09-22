import React from 'react';
import { StackNavigator } from 'react-navigation';
import * as screens from './screens';

export default StackNavigator({
  Main: { screen: screens.MainScreen },
  Chat: { screen: screens.ChatScreen }
});
