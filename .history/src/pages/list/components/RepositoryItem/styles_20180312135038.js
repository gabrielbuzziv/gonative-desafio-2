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

  avatar: {
    width: 45,
    height: 45,
  },

  data: {
    justifyContent: 'flex-start',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.regular,
  },

  organiztion: {
    fontSize: 14,
    color: colors.regular,
  },

  icon: {
    color: colors.light,
  },
});
