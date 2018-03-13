import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    padding: 5px,
    borderRadius: metrics.baseRadius
  },

  filter: {
    color: colors.dark,
  },

  active: {
    fontWeight: 'bold',
  },
});
