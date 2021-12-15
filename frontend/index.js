/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './components/App';
import {pages} from './constants/pages';
import UserInfoPage from './components/UserInfoPage';
import TimerPage from './components/TimerPage';
import LoginTouring from './components/LoginTouring';
import TouringInfo from './components/TouringInfo';

Navigation.registerComponent(pages.LOGINTOURING, () => LoginTouring);
Navigation.registerComponent(pages.TOURINGINFOPAGE, () => TouringInfo);
Navigation.registerComponent(pages.APP, () => App);
Navigation.registerComponent(pages.USERINFOPAGE, () => UserInfoPage);
Navigation.registerComponent(pages.TIMERPAGE, () => TimerPage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: pages.LOGINTOURING,
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});
