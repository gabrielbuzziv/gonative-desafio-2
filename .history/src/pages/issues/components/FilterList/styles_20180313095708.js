import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: metrics.basePadding,
  },

  filter: {
    color: colors.dark,
  },

  active: {
    fontWeight: 'bold',
  },
});
