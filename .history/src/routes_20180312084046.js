import { StackNavigatior } from 'react-navigation';

// Pages
import List from 'pages/list';
// import Issues from 'pages/Issues';

export default StackNavigatior(
  {
    List: { screen: List },
  },
  { initialRouteName: 'List' },
);
