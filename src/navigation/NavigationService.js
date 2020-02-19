import {
  NavigationActions,
  NavigationNavigateAction,
  StackActions,
  NavigationStackAction,
} from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function reset(routeName) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName })],
    })
  )
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

function goBack(routeName, params) {
  _navigator.dispatch(NavigationActions.back())
}

// add other navigation functions that you need and export them

export default {
  goBack,
  navigate,
  reset,
  setTopLevelNavigator,
}
