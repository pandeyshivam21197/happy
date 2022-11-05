import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationKeys} from '../navigation/constants';

type valueof<T> = T[keyof T];

type NavigationKeysTypes = valueof<NavigationKeys>;

class NavigationService {
  navigationRef = createNavigationContainerRef();

  get navigation() {
    return this.navigationRef;
  }

  navigationToScreen = (
    screenName: NavigationKeysTypes,
    params = {},
    tabName: NavigationKeysTypes | null,
    parentRoute: NavigationKeysTypes,
  ) => {
    if (!this.navigation) {
      return;
    }

    if (parentRoute) {
      if (tabName) {
        this.navigation.navigate(
          parentRoute as never,
          {
            screen: tabName,
            params: {screen: screenName, params},
          } as never,
        );
      } else {
        this.navigation.navigate(
          parentRoute as never,
          {
            screen: screenName,
            params,
          } as never,
        );
      }

      return;
    } else if (tabName) {
      this.navigation.navigate(
        tabName as never,
        {screen: screenName, params} as never,
      );

      return;
    }

    this.navigation.navigate(screenName as never, params as never);
  };

  navigateToBottomTabStack = (
    screenName: NavigationKeysTypes,
    tabName: NavigationKeysTypes,
    params: object,
  ) => {
    this.navigationToScreen(
      screenName,
      params,
      tabName,
      NavigationKeys.bottomTab,
    );
  };

  navigateToChatStack = (
    screenName: NavigationKeysTypes,
    params: object,
  ): void => {
    this.navigationToScreen(screenName, params, null, NavigationKeys.chatStack);
  };

  getCurrentRouteName = (): string | undefined => {
    if (!this.navigationRef) {
      return undefined;
    }

    return this.navigationRef.getCurrentRoute()?.name;
  };

  resetStack = (stackName: NavigationKeysTypes): void => {
    this.navigation.reset({
      index: 0,
      routes: [{name: stackName as string}],
    });
  };

  canGoBack = (): boolean => {
    return this.navigation.canGoBack();
  };
}

const navigationService = new NavigationService();
export {navigationService as NavigationService};
