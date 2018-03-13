import { StackNavigatior } from 'react-navigation';

// Pages
import List from 'pages/list';

export default StackNavigatior(
  {
    List: { screen: List },
  },
  { initialRouteName: 'List' },
);
