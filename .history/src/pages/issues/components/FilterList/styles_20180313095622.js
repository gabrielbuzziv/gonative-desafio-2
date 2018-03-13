import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.light,
    color: colors.dark,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  active: {
    fontWeight: 'bold',
  },
});
