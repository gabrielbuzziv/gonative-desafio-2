import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

export default StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  organiztion: {
    fontSize: 14,
  },

  icon: {
    color: colors.light,
  },
});
