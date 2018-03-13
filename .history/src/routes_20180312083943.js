import { StackNavigatior } from 'react-navigation';

// Pages
import List from 'pages/List';
// import Issues from 'pages/Issues';

export default StackNavigatior(
  {
    List: { screen: List },
  },
  { initialRouteName: 'List' },
);
