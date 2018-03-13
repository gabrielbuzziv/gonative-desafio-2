import { StackNavigator } from 'react-navigation';

// Pages
import List from 'pages/list';

const Routes = StackNavigator(
  {
    List: { screen: List },
  },
  {
    initialRouteName: 'List',
  },
);

export default Routes;
