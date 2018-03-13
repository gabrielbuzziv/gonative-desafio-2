import { StackNavigator } from 'react-navigation';

// Pages
import List from 'pages/list';

export default StackNavigator(
  {
    List: { screen: List },
  },
  {
    initialRouteName: 'List',
  },
);
