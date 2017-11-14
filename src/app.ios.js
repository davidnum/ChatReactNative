import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import registerScreens, { constants } from './screens';
import { iconsMap, iconsLoaded } from './utils/icons';

const store = configureStore();
registerScreens(store, Provider);

export default class App extends Component {
  constructor(props) {
    super(props);
    iconsLoaded.then(() => {
      this.startApp();
    });
  }
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Main',
          title: 'Main',
          icon: iconsMap['ios-person'],
          screen: constants.MAIN_SCREEN
        },
        {
          label: 'Chat',
          title: 'Chat',
          icon: iconsMap['ios-person'],
          screen: constants.CHAT_SCREEN
        }
      ]
    });
  }
}
