import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import registerScreens, { constants } from './screens';

const store = configureStore();
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    title: 'Main',
    screen: constants.MAIN_SCREEN,
    navigatorButtons: {
      leftButtons: [
        {
          id: 'sideMenu'
        }
      ]
    }
  },
  drawer: {
    left: {
      screen: constants.DRAWER
    }
  }
});
