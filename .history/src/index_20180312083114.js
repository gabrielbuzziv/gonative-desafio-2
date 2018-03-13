import React from 'react';
import 'config/ReactotronConfig';
import 'config/IgnoreWarnings';

import createNavigator from 'routes';

const Routes = createNavigator();

const Index = () => <Routes />;
export default Index;
