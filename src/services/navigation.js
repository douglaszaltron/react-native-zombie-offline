import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }
}

function goBack(options) {
  if (_navigator) {
    _navigator.dispatch(NavigationActions.back(options));
  }
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
};
