import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '../base/navigator/nav'; // Ensure this matches the path to your nav file
import { setScreen } from '../apis';

const Container = () => {
  // const getActiveRouteName = navState => {
  //   if (!navState) {
  //     return null;
  //   }
  //   const route = navState.routes[navState.index];
  //   if (route.routes) {
  //     return getActiveRouteName(route);
  //   }
  //   return route.routeName;
  // };

  // const handleNavigationChange = (currentState, prevState) => {
  //   const currentRouteName = getActiveRouteName(currentState);
  //   setScreen(currentRouteName);
  // };

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default Container;
