import { Navigation } from 'react-native-navigation';

import Drawer from './Drawer';

import ChatScreen from './ChatScreen';
import MainScreen from './MainScreen';

import * as constants from './constants.js';
export { constants };

export default (store, provider) => {
  Navigation.registerComponent(constants.DRAWER, () => Drawer, store, provider);

  Navigation.registerComponent(
    constants.MAIN_SCREEN,
    () => MainScreen,
    store,
    provider
  );
  Navigation.registerComponent(
    constants.CHAT_SCREEN,
    () => ChatScreen,
    store,
    provider
  );
};
