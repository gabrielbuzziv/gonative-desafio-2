import React from 'react';
import 'config/ReactotronConfig';
import 'config/IgnoreWarnings';

import { View } from 'react-native';

import createNavigator from 'routes';

const Routes = createNavigator();

const Index = () => <Routes />;
export default Index;
