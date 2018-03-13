import React from 'react';
import { StackNavigatior, TabNavigator } from 'react-navigation';

// Pages
import List from 'pages/List';
// import Issues from 'pages/Issues';

const createNavigator = () =>
  StackNavigatior(
    {
      List: { screen: List },
      // Issues: {},
    },
    {
      initialRouteName: 'List',
    },
  );

export default createNavigator;
